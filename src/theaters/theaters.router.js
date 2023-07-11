const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const {list} = require("./theaters.controller")

router.route("/").get(list).all(methodNotAllowed)

module.exports = router;