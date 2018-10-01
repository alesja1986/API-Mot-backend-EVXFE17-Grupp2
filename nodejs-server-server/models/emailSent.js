const db = require("mongoose");

const emailSent = db.Schema({
    _id: db.Schema.Types.ObjectId,
    created: { type: Date, default: Date.now() }
});

module.exports = db.model("EmailSent", emailSent);