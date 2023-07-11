const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

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

const addCritic = mapProperties(
    {
      preferred_name: "critic.preferred_name",
      surname: "critic.surname",
      organization_name: "critic.organization_name",
  })
function updateReview(updatedReview){
    return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview)
    .then(() => knex("reviews")
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .select("reviews.*", "critics.*")
    .where({"reviews.review_id": updatedReview.review_id})
    .then((data) => data.map(addCritic)[0]))
}

module.exports = {
    deleteReview,
    findReview,
    updateReview,

}