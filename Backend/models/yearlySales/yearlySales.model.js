const db = require("mongoose");

const salesSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name:String,
    price:Number,
    quantity:Number,
    total:Number,
    Date:Date
});

module.exports = db.model("YearlySales", salesSchema);