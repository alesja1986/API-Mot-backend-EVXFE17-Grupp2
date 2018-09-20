const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.PRIVATE_SECRET_KEY);
        req.userData = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Authorization Failed!' });
    };


    const db = require('mongoose');
    const bodyParser = require('body-parser');
    const express = require('express');
    const route = express.Router();

    const uri = 'http://localhost:3001/api/users/';

    //MongoDB Schema - Product
    const User = require('../models/user/user');

    //GET product route
    route.get('/', (req, res, next) => {
        // object orientated javascript using mongoose template
        User
            .find()   // we can do .find().where() if we want to find a specific name of id in the database
            .exec()
            .then((users) => {

                console.log(users);
                res.status(200).json(users); // if OK json strygify and return data
            })// what to do with data returned from get request
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
    });


    //POST product route
    route.post('/', (req, res, next) => {
        let user = new User({
            _id: new db.Types.ObjectId(), //generating new id
            username: req.body.username,
            password: req.body.password
        });

        user.save()// mongodb command, to save post in mongo database
            .then((result) => console.log(result))
            .catch((err) => console.log(err));

        res.status(201).json({
            user: user
        });

    });


}



