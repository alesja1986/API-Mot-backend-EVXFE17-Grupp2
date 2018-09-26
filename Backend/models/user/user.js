const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('users', UserSchema);




/*********** */

// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     _id: db.Schema.Types.ObjectId,
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     created: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('users', userSchema);

/************************ */


// const db = require('mongoose');

// const userSchema = db.Schema({
//     _id: db.Schema.Types.ObjectId,
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     created: { type: Date, default: Date.now }
// });

// module.exports = db.model('User', userSchema);

