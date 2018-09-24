const route = require('express').Router();

const transactions = require('../../controllers/transaction/transaction.controller.js');

route.get('/', transactions.getTransactions);
route.post('/', transactions.createTransaction);
route.put('/:_id', transactions.updateTransaction);
route.delete('/:_id', transactions.deleteTransaction);

module.exports = route;