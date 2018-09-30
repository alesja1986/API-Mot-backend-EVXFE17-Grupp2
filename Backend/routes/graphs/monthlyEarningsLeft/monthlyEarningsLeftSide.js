const route = require("express").Router();

const MonthlyEarningsLeft = require("../../../controllers/graphs/monthlyEarningsLeftSide/monthlyEarningsLeftController");

//Unsecured routes
route.get("/monthlyearningleft/:type", MonthlyEarningsLeft.getType);
route.post("/monthlyearningleft", MonthlyEarningsLeft.placeOrder);

//Secured route
module.exports = route;