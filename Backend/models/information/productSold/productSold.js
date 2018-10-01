const mongodb = require('mongoose');

const  productSoldSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    name: String,
    price: Number,
    quantity: Number
})

module.exports = mongodb.model('product', productSoldSchema)