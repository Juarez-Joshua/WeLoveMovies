const knex = require("../db/connection");

function readMovie(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function listMovies() {
  return knex("movies").select("*");
}

function listShowingMovies() {
  return knex("movies as m")
    .join("movies_theaters as t", "m.movie_id", "t.movie_id")
    .select("*")
    .where({ is_showing: true })
    .groupBy("m.movie_id");
}
module.exports = {
  listMovies,
  listShowingMovies,
  readMovie,
};
