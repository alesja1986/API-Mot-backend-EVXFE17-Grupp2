const db = require("mongoose");
const RecentActivity = require("../../models/recentActivity/recentActivity.model.js");


exports.recentActivity = (req,res,) => {
        const skip = parseInt(req.params.skipvalue);
        RecentActivity.find().sort('-date').skip(skip).limit(4)
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