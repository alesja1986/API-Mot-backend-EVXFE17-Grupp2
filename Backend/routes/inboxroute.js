const db = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const route = express.Router();

const uri = 'http://localhost:3001/api/inbox/';  //WHY NOT USED?

//MongoDB Schema - Product
const Email = require('../../models/inbox/inbox');

//GET product route
route.get('/', (req, res, next) => {
    // object orientated javascript using mongoose template
    Email
        .find()   // we can do .find().where() if we want to find a specific name of id in the database
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
});


//POST product route
route.post('/', (req, res, next) => {
    let email = new Email({

        name: req.body.name,
        message: req.body.message
    });

    email.save()// mongodb command, to save post in mongo database
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

    res.status(201).json({
        email: email
    });

});





module.exports = route;//export products module


//.... remove products and everything in get and post and then install mongodb by:
// npm install --save mongoose
//it will now show as a dependency in package json.