import mongoose from "mongoose";

const weightSchema = mongoose.Schema({
  weight: Number,
  date: String,
  notes: String,
});

const Weight = mongoose.model("Weight", weightSchema);

export default Weight;
