const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Config body-parser
// create application/json parser-Documents
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser-Documents
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("../routers/web"));

module.exports = app;
