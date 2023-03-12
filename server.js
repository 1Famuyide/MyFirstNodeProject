const express = require("express")

const index = require("./routes/index")
const register = require("./routes/register")
const schedule = require("./routes/schedule")
const speaker = require("./routes/speaker")
const venue = require("./routes/venue")

const app = express()

app.set ("view engine", "ejs")

app.use(express.static("public"))
app.use("/", index)
app.use("/register", register)
app.use("/schedule", schedule)
app.use("/speaker", speaker)
app.use("/venue", venue)

app.listen(3000, () => {
    console.log("server is running")
})