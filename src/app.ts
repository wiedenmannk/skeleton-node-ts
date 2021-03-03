import express from "express";
import cookieParser from "cookie-parser";
import { config } from "./model/config";
// import { log } from "./common/functions/log";

const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");

const indexRouter = require(config.path.routes + "index");
const usersRouter = require(config.path.routes + "users");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const staticFolder = path.join(__dirname, "web");
app.use(express.static(staticFolder));
console.log("static folder", staticFolder);

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
