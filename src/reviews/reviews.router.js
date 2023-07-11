const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const {destroy} = require("./reviews.controller")

router.route("/:reviewId").delete(destroy).all(methodNotAllowed)

module.exports = router;