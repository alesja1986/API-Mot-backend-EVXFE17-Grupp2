const mongodb = require('mongoose'); // importing mongoose

const inboxSchema = mongodb.Schema({
    name: String,
    message: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongodb.model('Inbox', inboxSchema)//exporting module.