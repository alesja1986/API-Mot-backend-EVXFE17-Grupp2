// this is our webserver for the api
const port = process.env.port || 3001;
// 3001 is standard if we dont have an online webserver
const http = require('http'); // require is a buildt in library in node
const app = require('./app'); // our middleware


http.createServer(app).listen(port);//start webserver

//..... al we need to start webserver. incl app.js
