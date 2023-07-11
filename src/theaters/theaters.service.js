const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceConfig = {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  rating: ["movies", null, "rating"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  created_at: ["movies", null, "created_at"],
  updated_at: ["movies", null, "updated_at"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  is_showing: ["movies", null, "is_showing"],
  theater_id: ["movies", null, "theater_id"],
};

const reduceMovies = reduceProperties("theater_id", reduceConfig);

function listTheaters() {
  return knex("theaters as t ")
  .join("movies_theaters as m", "t.theater_id", "m.theater_id")
  .join("movies as o", "m.movie_id", "o.movie_id")
  .select("*")
    .then(reduceMovies);
}

module.exports = {
  listTheaters,
};
