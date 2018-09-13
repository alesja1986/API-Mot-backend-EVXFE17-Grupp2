const authorization = require('../auth/auth.js');
const route = require('express').Router();

const users = require('../controllers/usersController.js');

//Unsecured routes
route.post('/signup', users.signUp);
route.post('/signin', users.signIn);

//Secured routes
route.get('/', authorization, users.getAllUsers);
route.get('/:id', authorization, users.getUser);
route.put('/:id', authorization, users.updateUser);
route.delete('/:id', authorization, users.removeUser);

module.exports = route;
