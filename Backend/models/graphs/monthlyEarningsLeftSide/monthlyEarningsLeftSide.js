const db = require("mongoose");

const monthlyEarningsLeftSideSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    type: { type: String, require: true },
    created: { type: Date, default: Date.now() },
    price: { type: Number, require: true }
});

module.exports = db.model("MonthlyEarningsLeft", monthlyEarningsLeftSideSchema);