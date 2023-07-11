const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const {destroy, update} = require("./reviews.controller")

router.route("/:reviewId").delete(destroy).put(update).all(methodNotAllowed)

module.exports = router;