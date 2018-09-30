const route = require("express").Router();

const EmailSent = require("../../../controllers/graphs/emailSent/emailSent");

//Unsecured routes
route.get("/api/email", EmailSent.getType);
route.post("/api/email", EmailSent.placeOrder);

//Secured route
module.exports = route;