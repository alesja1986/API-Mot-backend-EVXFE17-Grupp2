const db = require("mongoose");

const MonthlyEarningsLeft = require("../../../models/graphs/monthlyEarningsLeftSide/monthlyEarningsLeftSide");

exports.getType = (req, res) => {
    console.log(req.params.type);
    MonthlyEarningsLeft.find({ type: req.params.type })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(error => res.status(500).json({ errorcode: "500", message: "internal server error"}))
}

exports.placeOrder = (req, res) => {
    let monthlyEarnings = new MonthlyEarningsLeft({
        _id: new db.Types.ObjectId(),
        type: req.body.type,
        price: req.body.price,
    });
    monthlyEarnings.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: "Product was created successfully" })
        })
        .catch(error => console.log(error));
}
    
