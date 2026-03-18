import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
  type: String,
  duration: Number,
  date: String,
});

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
