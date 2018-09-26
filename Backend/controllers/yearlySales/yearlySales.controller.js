const db = require("mongoose");
const YearlySales = require("../../models/yearlySales/yearlySales.model.js");


exports.yearlySales = (req,res) => {
    YearlySales.find({"date" : { $gte : new Date("2018-01-01T20:15:31Z") }}) //hämtar alla producter från  år 2018
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
