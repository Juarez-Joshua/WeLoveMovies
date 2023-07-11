const knex = require("../db/connection");

function deleteReview(reviewId){
    return knex("reviews")
        .select("*")
        .where({review_id:reviewId})
        .del()
}

function findReview(reviewId){
    return knex("reviews")
    .select("*")
    .where({review_id:reviewId})
    .first()
}

module.exports ={
    deleteReview,
    findReview
}