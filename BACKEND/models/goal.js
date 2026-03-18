import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
  targetWeight: Number,
  startWeight: Number,
  targetDate: String,
});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
