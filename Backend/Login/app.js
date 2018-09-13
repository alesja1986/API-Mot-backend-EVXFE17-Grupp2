const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//CORS - Error Handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//REST API Routes
const userRoutes = require('./routes/users.js');
app.use('/api/users', userRoutes);

module.exports = app;