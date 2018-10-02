const mongodb = require('mongoose');

const ordersSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    name: String,
    price: Number,
})

module.exports = mongodb.model('ordere', ordersSchema)