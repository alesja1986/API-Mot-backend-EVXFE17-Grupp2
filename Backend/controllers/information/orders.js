const mongodb = require('mongoose');
const Orders = require('../../models/information/orders/orders.js');


exports.createOrders = (req, res) => {
    let orders = new Orders ({
        _id: new mongodb.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    orders.save()
    .then((result) => {
        res.status(201).json(result)
    })
    .catch((err) => console.log(err))
};

exports.getOrders = (req, res) => {
    Orders.find()
    .exec()
    .then( (result) => {
        res.status(200).json(result)
    })

    .catch((err) => console.log(err))
}