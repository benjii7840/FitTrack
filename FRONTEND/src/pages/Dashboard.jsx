const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-1">Current Weight</p>
          <p className="text-3xl font-bold text-gray-800">
            -- <span className="text-sm font-normal text-gray-400">kg</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-1">Workouts This Week</p>
          <p className="text-3xl font-bold text-gray-800">--</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-500 mb-1">Goal Progress</p>
          <p className="text-3xl font-bold text-gray-800">
            -- <span className="text-sm font-normal text-gray-400">%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
