const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
});

function movieReviews(movieId) {
  return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("*")
    .where({ "r.movie_id": movieId })
    .then((data) => data.map(addCritic));
}

function findTheatersForMovie(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as m", "m.theater_id", "t.theater_id")
    .select("*")
    .where({ movie_id: movieId });
}

function readMovie(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function listMovies() {
  return knex("movies").select("*");
}

function listShowingMovies() {
  return knex("movies as m")
    .join("movies_theaters as t", "m.movie_id", "t.movie_id")
    .select(
      "m.movie_id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url"
    )
    .where({ "t.is_showing": true })
    .groupBy("m.movie_id");
}
module.exports = {
  listMovies,
  listShowingMovies,
  readMovie,
  findTheatersForMovie,
  movieReviews,
};
