const db = require("mongoose");
const RecentActivity = require("../../models/recentActivity/recentActivity.model.js");


exports.recentActivity = (req,res) => {
        RecentActivity.find().sort('-date')
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
            error:err
    });
});
    };