const mongodb = require('mongoose');
const Order = require('../../models/order/order.model');

exports.getOrders = (req, res) => {
    Order.find()
    .exec((error, order) => {
        error ? res.status(500).json({error: error}) : res.status(200).json(order)
    })
};

exports.createOrder = (req, res, next) => {
    let order = new Order({
        _id: new mongodb.Types.ObjectId(),
        productname: req.body.productname,
        status: req.body.status,
        price: req.body.price,
        edit: false
    })

    order.save()
    .then((result) => {
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err) => console.log(err))
};

exports.updateOrder = (req, res, next) => {
    Order.findOneAndUpdate({_id: req.body._id}, {$set:{productname: req.body.name, status: req.body.status, price: req.body.price}}, {new: true}, function(err, doc){
        err ? res.status(500).json({error: err}) : res.status(200).json(doc)
    });
};

exports.deleteOrder = (req, res, next) => {
    Order.findByIdAndRemove({_id: req.body._id}, (err, response) => {
        err ? res.status(500).json({error: err}) : res.status(204);
     })
};

