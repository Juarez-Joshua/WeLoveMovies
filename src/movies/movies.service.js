const knex = require("../db/connection");

function findTheatersForMovie(movieId) {
  return knex("theaters as t" )
    .join("movies_theaters as m", "m.theater_id", "t.theater_id")
    .select("*")
    .where({movie_id: movieId});
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
    .select("*")
    .where({ is_showing: true })
    .groupBy("m.movie_id");
}
module.exports = {
  listMovies,
  listShowingMovies,
  readMovie,
  findTheatersForMovie,
};
