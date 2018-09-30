const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//CORS error handeling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route imports below 
const monthlyEarningsLeftRoutes = require("./routes/graphs/monthlyEarningsLeft/monthlyEarningsLeftSide");
const emailSent = require("./routes/graphs/emailSent/emailSent");

//rest api route declares below 
app.use("/", monthlyEarningsLeftRoutes);
app.use("/", emailSent);


//
module.exports = app;