const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    productname: String,
    status: String,
    price: Number,
    edit: Boolean,
    created: { type: Date, default: Date.now },
})

module.exports = mongodb.model('Order', orderSchema);