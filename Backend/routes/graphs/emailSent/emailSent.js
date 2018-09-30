const route = require("express").Router();

const EmailSent = require("../../../controllers/graphs/emailSent/emailSent");

//Unsecured routes
route.get("/email", EmailSent.getType);
route.post("/email", EmailSent.placeOrder);

//Secured route
module.exports = route;