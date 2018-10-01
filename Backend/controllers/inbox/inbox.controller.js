const db = require('mongoose');

const express = require('express');
const route = express.Router();


//MongoDB Schema - Product
const Email = require('../../models/inbox/inbox.model.js');

//GET Emails
exports.getInbox = (req, res, ) => {
    Email
        .find()
        .exec()
        .then((emails) => {

            console.log(emails);
            res.status(200).json(emails); // if OK json strygify and return data
        })// what to do with data returned from get request
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
};

//For testing

exports.postEmail = (req, res, next) => {
    let email = new Email({

        name: req.body.name,
        message: req.body.message
    });

    email.save()
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

    res.status(201).json({
        email: email
    });

};










