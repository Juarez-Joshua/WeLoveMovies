const {deleteReview, findReview, updateReview} = require("./reviews.service")

//checks to make sure the reviewId given in params exists in the DB
//If in the DB, adds info to res.locals and next, else error
async function checkIfReviewExists(req,res,next){
    const {reviewId} = req.params
    const data = await findReview(reviewId);
    if(data){
        res.locals.reviewId = reviewId;
        res.locals.review = data;
        next()
    }else{
        next({
            status: 404,
            message: `Review cannot be found with an ID of ${reviewId}`
        })
    }
}

async function destroy(_req,res,_next){
    const data = await deleteReview(res.locals.reviewId); 
    res.status(204).send({data})
}

async function update(req,res,_next){
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
        review_id: res.locals.reviewId,
      };
      const data = await updateReview(updatedReview)
      res.send({data})
}

module.exports = {
    destroy: [checkIfReviewExists, destroy],
    update: [checkIfReviewExists, update],
}