

const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    username: { type: String, required: true },
    exercise: { type: String, required: true },
    duration: { type: Number, required: true },
    mood: { type: String, required: true },
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
