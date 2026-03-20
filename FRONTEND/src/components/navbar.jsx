import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 p-4 bg-gray-900">
      <div>
        <h1 className="text-white font-bold uppercase">Fit Track</h1>
      </div>
      <div className="flex flex-col mt-8 gap-4 text-gray-300 ">
        <Link to="/" className="hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/log-weight" className="hover:bg-gray-700">
          Log Weight
        </Link>
        <Link to="/log-workout" className="hover:bg-gray-700">
          Workout
        </Link>
        <Link to="/goals">Goals</Link>
        <Link to="/history" className="hover:bg-gray-700">
          History
        </Link>
      </div>
      <div className="mt-auto mb-5 text-gray-500">
        <h2>Train Hard Win Easy.</h2>
      </div>
    </div>
  );
};

export default Sidebar;
