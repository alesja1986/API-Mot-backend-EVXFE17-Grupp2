const route = require("express").Router();

const yearlySales = require("../../controllers/yearlySales/yearlySales.controller.js");

//Unsecured routes
route.get("/", yearlySales.yearlySales);
module.exports = route;