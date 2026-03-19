import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Workout from "./models/workout.js";
import Goal from "./models/goal.js";
import Weight from "./models/weight.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

app.get("/", (req, res) => {
  res.send("Your server is running");
});

app.get("/api/weights", async (req, res) => {
  const weights = await Weight.find();
  res.json(weights);
});

app.post("/api/weights", async (req, res) => {
  const { weight, date, notes } = req.body;

  const newWeight = await Weight.create({
    weight: weight,
    date: date,
    notes: notes,
  });
  res.json(newWeight);
});

app.delete("/api/weights/:id", async (req, res) => {
  await Weight.findByIdAndDelete(req.params.id);
  res.json({ message: "Your information has sucessfully been deleted" });
});

app.get("/api/workout", async (req, res) => {
  const workout = await Workout.find();
  res.json(workout);
});
app.post("/api/workout", async (req, res) => {
  const { type, duration, date } = req.body;
  const newWorkout = await Workout.create({
    type,
    duration,
    date,
  });
  res.json(newWorkout);
});

app.put("/api/workout/:id", async (req, res) => {
  const { type, duration, date } = req.body;
  const updateWorkout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      type,
      duration,
      date,
    },
    { new: true },
  );
  res.json(updateWorkout);
});

app.delete("/api/workout/:id", async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: "Your Workout Has Been Deleted Sucessfully!" });
});

app.get("/api/Goal", async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});
app.post("/api/Goal", async (req, res) => {
  const { targetWeight, startWeight, targetDate } = req.body;
  const newGoal = await Goal.create({
    targetWeight,
    startWeight,
    targetDate,
  });
  res.json(newGoal);
});

app.put("/api/Goal/:id", async (req, res) => {
  const { targetWeight, startWeight, targetDate } = req.body;
  const updateGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      targetWeight,
      startWeight,
      targetDate,
    },
    { new: true },
  );
  res.json(updateGoal);
});

app.delete("/api/Goal/:id", async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: "Your Goal Has Been Deleted Sucessfully!" });
});

app.listen(5001, () => {
  console.log("Your Server is running");
});
