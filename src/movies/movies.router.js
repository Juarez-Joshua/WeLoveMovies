const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const {list} = require("./movies.controller")

router.route("/").get(list).all(methodNotAllowed)

module.exports = router