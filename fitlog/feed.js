

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Workout = require("./models/workout")

const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/workout", (req, res) => {
    res.send("Workouts will be here")
})


const stuff = new Workout ({
    username: "jada",
    exercise: "Cheering",
    duration: 60,
    mood: "Amazing"
})
stuff.save().then(stuff => {
    console.log(stuff)
})
.catch(e => {
    console.log(e);
})

app.listen(5000, () => {
    console.log("We are going on the port")
})

