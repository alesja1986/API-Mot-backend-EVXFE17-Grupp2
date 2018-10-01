const mongodb = require('mongoose');

const userSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = mongodb.model('Users', userSchema);