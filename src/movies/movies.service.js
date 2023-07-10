const knex = require("../db/connection");

function listMovies() {
  return knex("movies").select("*");
}

module.exports = {
    listMovies,
}