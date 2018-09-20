const db = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const route = express.Router();

const uri = 'http://localhost:3001/api/users/';

//MongoDB Schema - Product
const User = require('../../models/user/user');

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
                message: err + " Couldnt fetch"
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





module.exports = route;//export products module


//.... remove products and everything in get and post and then install mongodb by:
// npm install --save mongoose
//it will now show as a dependency in package json.

// const authorization = require('../../auth/auth.js');
// const route = require('express').Router();

// const users = require('../../controllers/userscontroller/usersController.js');

// //Unsecured routes
// route.post('/signup', users.signUp);
// route.post('/signin', users.signIn);

// //Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

// module.exports = route;
