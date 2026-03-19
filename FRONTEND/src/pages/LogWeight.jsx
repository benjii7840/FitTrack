import { useState } from "react";

const LogWeight = () => {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  async function handleSubmit() {
    if (!weight || !date) return;

    const response = await fetch("http://localhost:5001/api/weights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ weight: Number(weight), date, notes }),
    });

    const data = await response.json();
    console.log("Saved:", data);

    // clear form
    setWeight("");
    setDate("");
    setNotes("");
  }

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Log Weight</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 80"
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
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Morning weight before breakfast"
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold py-2 rounded-lg transition"
          >
            Log Weight
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogWeight;
