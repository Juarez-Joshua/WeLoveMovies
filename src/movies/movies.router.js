const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const { list, read, getTheatresForMovie, getReviewsForMovie} = require("./movies.controller");

router.route("/:movieId/reviews").get(getReviewsForMovie).all(methodNotAllowed)
router
  .route("/:movieId/theaters")
  .get(getTheatresForMovie)
  .all(methodNotAllowed);
router.route("/:movieId").get(read).all(methodNotAllowed);
router.route("/").get(list).all(methodNotAllowed);

module.exports = router;
