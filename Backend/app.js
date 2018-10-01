const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//CORS error handeling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
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
const exampleRoutes = require("./routes/exampleRoute/exampleRoute.js");
const transactionRoute = require('./routes/transactionRoute/transaction.route');
const orderRoute = require('./routes/orderRoute/order.route');
const recentActivityRoutes = require("./routes/recentActivityRoute/recentActivity.route.js");
const yearlySalesRoutes = require("./routes/yearlySalesRoute/yearlySales.route.js");
const inboxRoutes = require("./routes/inboxRoute/inbox.route");
const userRoutes = require("./routes/userRoute/user.route");

//rest api route declares below 
app.use("/", monthlyEarningsLeftRoutes);
app.use("/", emailSent);
app.use("/api/example", exampleRoutes);
app.use('/api/transactions', transactionRoute);
app.use("/api/orders", orderRoute);
app.use("/api/recentActivity", recentActivityRoutes);
app.use("/api/yearlySales", yearlySalesRoutes);
app.use("/inbox", inboxRoutes);
app.use("/users", userRoutes);

module.exports = app;