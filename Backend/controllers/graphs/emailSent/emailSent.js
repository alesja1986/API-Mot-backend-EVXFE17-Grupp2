const db = require("mongoose");


const EmailSent = require("../../../models/graphs/emailSent/emailSent");

exports.getType = (req, res) => {
    EmailSent.find()
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(error => res.status(500).json({ errorcode: "500", message: "internal server error"}))
}

exports.placeOrder = (req, res) => {
    let emailSent = new EmailSent({
        _id: new db.Types.ObjectId()
    });
    emailSent.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: "Product was created successfully" })
        })
        .catch(error => console.log(error));
}
    
