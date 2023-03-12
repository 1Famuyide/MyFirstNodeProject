const express = require("express")
const app = express.Router()

app.get("/", (req, res) => {
    res.render("schedule")
})

module.exports = app