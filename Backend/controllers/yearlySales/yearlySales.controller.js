const db = require("mongoose");
const YearlySales = require("../../models/yearlySales/yearlySales.model.js");

exports.yearlySales = (req,res) => {
    const years = parseInt(req.params.year);
    YearlySales.find({"date" : { $gte : new Date(years + "-01-01T00:00:01Z"),"$lte": new Date (years+"-12-31T00:00:00.146Z" )}}) //hämtar alla producter från  år 2018
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
}
