const db = require('mongoose');

const userSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = db.model('User', userSchema);