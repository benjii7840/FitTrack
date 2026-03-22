import { useState } from "react";
const LogWorkout = () => {
  const [workout, setWorkout] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  async function handleSubmit() {
    if (!workout || !date) return;

    const reponse = await fetch("http://localhost:5001/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: workout, date, duration: Number(duration) }),
    });

    const data = await reponse.json();
    console.log("saved", data);

    setDate("");
    setDuration("");
    setWorkout("");
  }
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Log Weight</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Duration
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 30 (min)"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              workout
            </label>
            <textarea
              value={workout}
              onChange={(e) => setWorkout(e.target.value)}
              placeholder="e.g. Morning Workout before breakfast"
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold py-2 rounded-lg transition"
          >
            Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogWorkout;
