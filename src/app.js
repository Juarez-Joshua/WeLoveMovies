if (process.env.USER) require("dotenv").config();
const express = require("express");
const movieRouter = require("./movies/movies.router");
const reviewRouter = require("./reviews/reviews.router")
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const app = express();

app.use("/movies", movieRouter);
app.use("/reviews", reviewRouter)

app.use(notFound)
app.use(errorHandler);

module.exports = app;
