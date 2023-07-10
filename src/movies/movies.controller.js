const {
  listMovies,
  listShowingMovies,
  readMovie,
  findTheatersForMovie,
  movieReviews,
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

async function getReviewsForMovie(req,res,_next){
    const data = await movieReviews(res.locals.movieId);
    res.send({data});
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
  getReviewsForMovie: [checkIfMovieExists, getReviewsForMovie],
};
