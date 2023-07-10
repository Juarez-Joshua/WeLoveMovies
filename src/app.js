if (process.env.USER) require("dotenv").config();
const express = require("express");
const movieRouter = require("./movies/movies.router")
const app = express();

app.use("/movies", movieRouter);
module.exports = app;
