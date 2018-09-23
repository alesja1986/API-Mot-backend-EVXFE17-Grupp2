const db = require("mongoose");

const exampleSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    email: { type: String, require: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    firstname: { type: String, require: true },
    lastname: { type: String, require: true }
});

module.exports = db.model("Example", exampleSchema);