const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const axios = require("axios");
var logger = require("morgan");
const cheerio = require("cheerio");
const app = express();

var PORT = 3000;
// Require all models
var db = require("./models");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connecting to MongoDB
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
