const {
  listMovies,
  listShowingMovies,
  readMovie,
  findTheatersForMovie,
} = require("./movies.service");

async function checkIfMovieExists(req, res, next) {
  const { movieId } = req.params;
  const data = await readMovie(movieId);
  if (data) {
    res.locals.movieId = movieId;
    res.locals.movie = data;
    next();
  } else {
    next({
      status: 404,
      message: `Movie cannot be found with ID ${movieId}`,
    });
  }
}

async function getTheatresForMovie(req, res, _next) {
  const data = await findTheatersForMovie(res.locals.movieId);
  res.send({data})
}

function read(req, res, _next) {
  res.send({ data: res.locals.movie });
}

async function list(req, res, _next) {
  const { is_showing } = req.query;
  if (is_showing === "true") {
    const data = await listShowingMovies();
    console.log(data.length);
    res.send({ data });
  } else {
    const data = await listMovies();
    res.send({ data });
  }
}

module.exports = {
  list,
  read: [checkIfMovieExists, read],
  getTheatresForMovie: [checkIfMovieExists, getTheatresForMovie],
};
