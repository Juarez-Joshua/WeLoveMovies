const {deleteReview, findReview} = require("./reviews.service")

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

async function destroy(req,res,_next){
    const data = await deleteReview(res.locals.reviewId); 
    res.status(204).send({data})
}

module.exports = {
    destroy: [checkIfReviewExists, destroy]
}