const route = require("express").Router();

const Example = require("../../controllers/example/example.js");

//Unsecured routes
route.post("/", Example.minFunktion);

module.exports = route;