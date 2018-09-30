const route = require("express").Router();

const MonthlyEarningsLeft = require("../../../controllers/graphs/monthlyEarningsLeftSide/monthlyEarningsLeftController");

//Unsecured routes
route.get("/api/monthlyearningleft/:type", MonthlyEarningsLeft.getType);
route.post("/api/monthlyearningleft", MonthlyEarningsLeft.placeOrder);

//Secured route
module.exports = route;