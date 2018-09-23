const route = require("express").Router();

const YearlySales = require("../../controllers/yearlySales/yearlySales.controller.js");

//Unsecured routes
route.post("/", YearlySales.minFunktion);

module.exports = route;