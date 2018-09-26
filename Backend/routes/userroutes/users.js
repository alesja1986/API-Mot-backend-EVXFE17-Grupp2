const mongoose = require('mongoose');
const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/user/user');
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post('/register', (req, res) => {
    let today = new Date();
    let userData = {
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        created: today
    }
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash,
                        User.create(userData)
                            .then(user => {
                                res.json({ status: user.username + "was registered successfully" })
                            })
                            .catch(err => {
                                res.send("error:" + err)
                            })
                })

            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send("error:" + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const loginUser = {
                        _id: user._id,
                        username: user.username
                    }
                    let token = jwt.sign(loginUser, process.env.SECRET_KEY, {
                        expiresIn: 5000
                    })
                    res.send(token)
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

users.get('/profile', (req, res) => {
    const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send("error :" + err)
        })
})

module.exports = users;




/********************* */

// const db = require('mongoose');
// const bodyParser = require('body-parser');
// const express = require('express');
// const route = express.Router();


// const uri = 'http://localhost:3001/api/users/';

// //MongoDB Schema - Product
// const User = require('../../models/user/user');

// //GET product route
// route.get('/', (req, res, next) => {
//     // object orientated javascript using mongoose template
//     User
//         .find()   // we can do .find().where() if we want to find a specific name of id in the database
//         .exec()
//         .then((users) => {

//             console.log(users);
//             res.status(200).json(users); // if OK json strygify and return data
//         })// what to do with data returned from get request
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json({
//                 message: err + " Couldnt fetch"
//             });
//         })
// });


// //CREATE USER
// route.post('/', (req, res, next) => {
//     let user = new User({
//         _id: new db.Types.ObjectId(), //generating new id
//         username: req.body.username,
//         password: req.body.password
//     });

//     user.save()// mongodb command, to save post in mongo database
//         .then((result) => console.log(result))
//         .catch((err) => console.log(err));

//     res.status(201).json({
//         user: user
//     });

// });





// module.exports = route;//export products module
// /************************ */

// //.... remove products and everything in get and post and then install mongodb by:
// // npm install --save mongoose
// //it will now show as a dependency in package json.

// // const authorization = require('../../auth/auth.js');
// // const route = require('express').Router();

// // const users = require('../../controllers/userscontroller/usersController.js');

// // //Unsecured routes
// // route.post('/signup', users.signUp);
// // route.post('/signin', users.signIn);

// // //Secured routes
// // route.get('/', authorization, users.getAllUsers);
// // route.get('/:id', authorization, users.getUser);
// // route.put('/:id', authorization, users.updateUser);
// // route.delete('/:id', authorization, users.removeUser);

// // module.exports = route;
