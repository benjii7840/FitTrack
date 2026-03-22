import { useState } from "react";
const Goals = () => {
  const [targetWeight, setTargetWeight] = useState("");
  const [targetdate, setTargetDate] = useState("");
  const [startWeight, setStartWeight] = useState("");

  async function handleSubmit() {
    if (!targetWeight || !targetdate) return;

    const reponse = await fetch(`${import.meta.env.VITE_API_URL}/api/goal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targetWeight: Number(targetWeight),
        targetDate: targetdate,
        startWeight: Number(startWeight),
      }),
    });

    const data = await reponse.json();
    console.log("saved", data);

    setTargetDate("");
    setStartWeight("");
    setTargetWeight("");
  }
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Goals</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              start Weight
            </label>
            <input
              type="number"
              value={startWeight}
              onChange={(e) => setStartWeight(e.target.value)}
              placeholder="e.g. 80"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Target date
            </label>
            <input
              type="date"
              value={targetdate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Target Weight
            </label>
            <textarea
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              placeholder="e.g. 90"
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold py-2 rounded-lg transition"
          >
            Goals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
