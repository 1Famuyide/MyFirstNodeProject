const mongoose = require("mongoose")

const url = "mongodb://0.0.0.0:27017/design-conference"

mongoose.connect(url)

const attendeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    quantity: Number,
    comments: String,
    totalCost: Number
})

const Attendee = mongoose.model("Attendee", attendeeSchema)

module.exports = Attendee