const route = require('express').Router();

const products = require('../../controllers/transaction/transaction.controller.js');

route.get('/', products.getTransactions);
route.post('/', products.createTransaction);

module.exports = route;