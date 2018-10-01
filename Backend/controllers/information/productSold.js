const mongodb = require('mongoose');
const Product = require('../../models/information/productSold/productSold.js');


exports.createProduct = (req, res) => {
    let product = new Product ({
        _id: new mongodb.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    })

    product.save()
    .then((result) => {
        res.status(201).json(result)
    })
    .catch((err) => console.log(err))
};

exports.getProducts = (req, res) => {
    Product.find()
    .exec()
    .then( (result) => {
        console.log(result);
        res.status(200).json(result)
    })

    .catch((err) => console.log(err))
}