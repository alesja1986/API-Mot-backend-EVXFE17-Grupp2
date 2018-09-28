const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb://localhost:27017/api';
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

var Users = require('../routes/users');
app.use('/users', Users);

app.listen(port, () => {
    console.log("server is running on port" + port)
});

/////**************************/////

// // this is our webserver for the api
// const port = process.env.port || 3001;
// // 3001 is standard if we dont have an online webserver
// const http = require('http'); // require is a buildt in library in node
// const app = require('./app'); // our middleware


// http.createServer(app).listen(port);//start webserver

// //..... al we need to start webserver. incl app.js


/////**************************/////


// const port = process.env.SERVER_PORT || 9999;
// const http = require('http');
// const db = require('mongoose');
// const app = require('./app.js');

// //Node JS Web Server
// http.createServer(app).listen(port, () => { console.log(`NODE JS Server online on port ${port}`) });

// //MongoDB Database Server
// db.connect(process.env.MONGO_DB_CONNECTIONSTRING, { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Database Server online on port 27017'))
//     .catch((err) => { console.log(err) });

// db.set('useCreateIndex', true);