// const db = require('mongoose');
// const encrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const User = require('../../models/user/user.js');


// // //User Functions

// exports.signIn = (req, res) => {
//     User.find({ username: req.body.username })
//         .exec()
//         .then(user => {
//             if (user.length === 0) {
//                 return res.status(401).json({ message: "User email or password is incorrect or empty." });
//             } else {
//                 encrypt.compare(req.body.password, user[0].password, (err, result) => {
//                     if (err) {
//                         return res.status(401).json({ message: "User email or password is incorrect or empty." });
//                     }

//                     if (result) {
//                         const token = jwt.sign(
//                             { userId: user[0]._id, username: user[0].username },
//                             process.env.PRIVATE_SECRET_KEY,
//                             { expiresIn: "24h" });

//                         return res.status(200).json({ message: "Authentication was successful", token: token });
//                     }

//                     res.status(401).json({ message: "Username or password is incorrect or empty." });
//                 });
//             }
//         })
//         .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while signing in the user. Please contact the System Administrator." }));
// }


// exports.signUp = (req, res) => {
//     User.find({ username: req.body.username })
//         .exec()
//         .then(user => {
//             if (user.length > 0) {
//                 return res.status(400).json({ message: `A user with the email ${req.body.username} already exist.` });
//             } else {
//                 encrypt.hash(req.body.password, 10, (err, hash) => {
//                     if (err) {
//                         return res.status(500).json({ error: err });
//                     } else {
//                         let user = new User({
//                             _id: new db.Types.ObjectId,
//                             username: req.body.username,
//                             password: hash
//                         });

//                         user.save()
//                             .then(() => res.status(201).json({ message: `The user ${req.body.username} was successfully created. Please login to access the api.` }))
//                             .catch((err) => res.status(500).json({ errorcode: "500", message: "Something went wrong while creating the user. Please contact the System Administrator." }));
//                     }
//                 });
//             }
//         })
//         .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while creating the user. Please contact the System Administrator." }));
// }

// // exports.getAllUsers = (req, res) => {
// //     User.find()
// //         .exec()
// //         .then(users => res.status(200).json(users))
// //         .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while signing in the user. Please contact the System Administrator." }));
// // }

// // exports.getUser = (req, res) => {
// //     User.find({ _id: req.params.id })
// //         .exec()
// //         .then(user => res.status(200).json(user))
// //         .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while signing in the user. Please contact the System Administrator." }));
// // }

// // exports.updateUser = (req, res) => {
// //     User.update({ _id: req.params.id })
// //         .exec()
// //         .then(user => res.status(200).json({ message: `The user ${user._id} was successfully updated.` })
// //             .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while signing in the user. Please contact the System Administrator." })));
// // }

// // exports.removeUser = (req, res) => {
// //     User.remove({ _id: req.params.id })
// //         .exec()
// //         .then(() => res.status(200).json({ message: `The user ${req.params.id} was successfully removed.` })
// //             .catch(() => res.status(500).json({ errorcode: "500", message: "Something went wrong while signing in the user. Please contact the System Administrator." })));
// // }