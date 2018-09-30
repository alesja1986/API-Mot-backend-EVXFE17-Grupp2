const db = require("mongoose");

const activitySchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    activity:String,
    date:Date
});

module.exports = db.model("RecentActivity", activitySchema);