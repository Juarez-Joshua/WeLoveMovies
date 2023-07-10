const router = require("express").Router();
const {list} = require("./movies.controller")

router.route("/").get(list)

module.exports = router