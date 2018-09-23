const route = require("express").Router();
const recentActivity = require("../../controllers/recentActivity/recentActivity.controller.js");

//Unsecured routes
route.get("/",recentActivity.recentActivity);
module.exports = route;
