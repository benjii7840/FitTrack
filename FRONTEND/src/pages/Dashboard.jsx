import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [weights, setWeights] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/weights")
      .then((res) => res.json())
      .then((data) => setWeights(data));

    fetch("http://localhost:5001/api/workout")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));

    fetch("http://localhost:5001/api/Goal")
      .then((res) => res.json())
      .then((data) => setGoal(data[0]));
  }, []);

  const currentWeight =
    weights.length > 0 ? Number(weights[weights.length - 1].weight) : null;

  const goalProgress =
    goal && currentWeight && goal.startWeight && goal.targetWeight
      ? Math.round(
          ((goal.startWeight - currentWeight) /
            (goal.startWeight - goal.targetWeight)) *
            100,
        )
      : "--";

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-2">Current Weight</p>
          <p className="text-3xl font-bold text-gray-800">
            {currentWeight}
            <span className="text-sm font-normal text-gray-400 ml-1">kg</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-2">Workouts This Week</p>
          <p className="text-3xl font-bold text-gray-800">{workouts.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-2">Goal Progress</p>
          <p className="text-3xl font-bold text-gray-800">
            {goalProgress}
            <span className="text-sm font-normal text-gray-400 ml-1">%</span>
          </p>
        </div>
        {/* Weight Chart */}
        {weights.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              Weight Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weights}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
