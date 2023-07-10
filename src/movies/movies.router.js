const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const {list, read} = require("./movies.controller")

router.route("/:movieId").get(read).all(methodNotAllowed)
router.route("/").get(list).all(methodNotAllowed)

module.exports = router