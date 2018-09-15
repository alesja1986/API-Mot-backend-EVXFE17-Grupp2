const mongodb = require('mongoose');

const transactionSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    name: String,
    productname: String,
    status: String,
    price: String,
    created: { type: Date, default: Date.now },
})

module.exports = mongodb.model('Transaction', transactionSchema);