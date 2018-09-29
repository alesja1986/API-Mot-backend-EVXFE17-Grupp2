const route = require("express").Router();

const yearlySales = require("../../controllers/yearlySales/yearlySales.controller.js");

//Unsecured routes
route.get("/:year", yearlySales.yearlySales);
module.exports = route;