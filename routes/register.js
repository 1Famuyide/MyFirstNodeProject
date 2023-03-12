const express = require("express");
const Attendee = require("../models/register.model");
const app = express.Router();
const bodyParser = require("body-parser");
const sendMail = require("../email");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("register", {
        message:null,
    });
});

app.post("/", (req, res) => {
    try {
        const newAttendee = new Attendee(req.body)
        console.log(req.body)
        newAttendee.totalCost = req.body.quantity * 1500
        newAttendee.save()
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: req.body.email,
            subject: "Digital ticket: Design Conference LIVE",
            text: `Congratulations!,you have successfully purchased ${req.body.quantity} for a total cost of ${newAttendee.totalCost}`
        }
        console.log(mailOptions)
        sendMail(mailOptions)

        res.render("register", {
            message: "success! Please check your mail for digital ticket"
        })
    } catch (error) {
         res.render("register", {
        message: "OOPS! An error occured."
    })
    }
});
    
module.exports = app;