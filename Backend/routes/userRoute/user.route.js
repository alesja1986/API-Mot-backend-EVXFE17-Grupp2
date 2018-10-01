const route = require('express').Router();

const users = require('../../controllers/users/users.controller.js');

route.get('/register', users.getAllUsers);
route.post('/register', users.signUp);
route.post('/login', users.signIn);

module.exports = route;