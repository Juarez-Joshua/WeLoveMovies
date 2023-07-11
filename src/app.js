if (process.env.USER) require("dotenv").config();
const express = require("express");
const movieRouter = require("./movies/movies.router");
const reviewRouter = require("./reviews/reviews.router")
const theatersRouter = require("./theaters/theaters.router")
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())

app.use("/movies", movieRouter);
app.use("/reviews", reviewRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
