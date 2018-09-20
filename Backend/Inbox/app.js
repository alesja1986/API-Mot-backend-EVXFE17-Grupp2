const express = require('express');
//Helping us to get data from a post body (our form body)
const bodyParser = require('body-parser');
const db = require('mongoose');
const app = express(); // require and import express package to be able to export modules


// MongoDB - (local)Connection with Options
const options = { // found and modified at mongodbs webnpage, see first screen shot
    useNewUrlParser: true,
    reconnectInterval: 500, //Reconnect every 500ms
    connectTimeoutMS: 10000, // Give up initian connection after 10 seconds
    socketTimeoutMS: 45000// Close sockets after 45 seconds of inactivity
}
db.connect('mongodb://localhost:27017/api', options);
// //CONNECT TO (local)MONGODB
// mongodb.connect('mongodb://localhost/dbtest'); // if using an online version, paste the url here and chenge login details.
// // automatically becomes localhost port 27017



// //CORS Errorhandling (eg. localhost:80 -> localhost:3001)

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*"); // what adresses we allow access to the API. * means everyone can access. can be replaced with a specific url. 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested.With, Content-Type, Accept, Authorization" // request allowed if the request has a matching content type and coming from the origin adress
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE"); // the type of requests accepted, depends on what you want to do with api from html
        return res.status(200).json({});
    }
    next(); // to avoid the function to stop at return statement we use next
});


app.use(bodyParser.urlencoded({ extended: false })); // we can now send html to the body parser
app.use(bodyParser.json()); // we can now send json to the body parser

//API Routes

const inboxRoute = require('../routes/inboxroutes/inboxroute.js'); //pointing att the products.js file
app.use('/api/inbox', inboxRoute); // if i go on url api/products we will go to tje products.js file
//adding routes

module.exports = app; // exporting this file