const route = require("express").Router();

const example = require("../../controllers/example/example.js");

//Unsecured routes
route.post("/", example.minFunktion);

module.exports = route;