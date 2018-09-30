const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    productname: String,
    status: String,
    price: String,
    edit: Boolean,
    created: { type: Date, default: Date.now },
})

module.exports = mongodb.model('Order', orderSchema);