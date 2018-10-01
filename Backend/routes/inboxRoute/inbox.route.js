const route = require('express').Router();

const inbox = require('../../controllers/inbox/inbox.controller.js');
route.get('/', inbox.getInbox);
route.post('/', inbox.postEmail);

module.exports = route;

