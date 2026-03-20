import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex p-4  gap-8 justify-between">
      <div className="">
        <h1 className="text-black font-bold uppercase">Fit Track</h1>
      </div>
      <div className="flex gap-4 text-black items-center justify-center ">
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
    </div>
  );
};

export default Sidebar;
