const mongodb = require('mongoose');
const Transaction = require('../../models/transaction/transaction.model');

exports.getTransactions = (req, res) => {
    Transaction.find()
    .exec((error, transaction) => {
        error ? res.status(500).json({error: error}) : res.status(200).json(transaction)
    })
};

exports.createTransaction = (req, res, next) => {
    let transaction = new Transaction({
        _id: new mongodb.Types.ObjectId(),
        name: req.body.name,
        status: req.body.status,
        price: req.body.price,
        edit: false
    })

    transaction.save()
    .then((result) => {
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err) => console.log(err))
};

exports.updateTransaction = (req, res, next) => {
    Transaction.findOneAndUpdate({_id: req.body._id}, {$set:{name: req.body.name, status: req.body.status, price: req.body.price}}, {new: true}, function(err, doc){
        err ? res.status(500).json({error: err}) : res.status(200).json(doc)
    });
};

exports.deleteTransaction = (req, res, next) => {
    Transaction.findByIdAndRemove({_id: req.body._id}, (err, response) => {
        err ? res.status(500).json({error: err}) : res.status(204);
     })
};

