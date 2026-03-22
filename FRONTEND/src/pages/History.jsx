import { useState, useEffect } from "react";

const History = () => {
  const [weights, setWeights] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/weights")
      .then((res) => res.json())
      .then((data) => setWeights(data));

    fetch(`${import.meta.env.VITE_API_URL}/api/workouts`)
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  async function handleDeleteWeight(id) {
    await fetch(`${import.meta.env.VITE_API_URL}/api/weights/${id}`, {
      method: "DELETE",
    });
    setWeights(weights.filter((w) => w._id !== id));
  }

  async function handleDeleteWorkout(id) {
    await fetch(`${import.meta.env.VITE_API_URL}/api/workouts${id}`, {
      method: "DELETE",
    });
    setWorkouts(workouts.filter((w) => w._id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">History</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Weight History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            Weight Logs
          </h2>
          {weights.length === 0 ? (
            <p className="text-gray-400 text-sm">No weight entries yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {weights.map((entry) => (
                <div
                  key={entry._id}
                  className="flex items-center justify-between border-b border-gray-50 pb-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {entry.weight} kg
                    </p>
                    <p className="text-xs text-gray-400">
                      {entry.notes || "No notes"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-gray-400">{entry.date}</p>
                    <button
                      onClick={() => handleDeleteWeight(entry._id)}
                      className="text-gray-300 hover:text-red-400 transition text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Workout History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            Workout Logs
          </h2>
          {workouts.length === 0 ? (
            <p className="text-gray-400 text-sm">No workouts logged yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {workouts.map((entry) => (
                <div
                  key={entry._id}
                  className="flex items-center justify-between border-b border-gray-50 pb-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {entry.type}
                    </p>
                    <p className="text-xs text-gray-400">
                      {entry.duration} mins
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-gray-400">{entry.date}</p>
                    <button
                      onClick={() => handleDeleteWorkout(entry._id)}
                      className="text-gray-300 hover:text-red-400 transition text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
