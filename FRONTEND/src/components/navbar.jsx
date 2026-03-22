import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center sticky top-0 z-10 gap-10">
      <h1 className="text-blue-600 font-bold uppercase tracking-wide text-lg">
        FitTrack
      </h1>
      <div className="flex gap-6 text-gray-600 text-sm font-medium  items-center justify-between">
        <Link to="/" className="hover:text-blue-500 transition">
          Dashboard
        </Link>
        <Link to="/log-weight" className="hover:text-blue-500 transition">
          Log Weight
        </Link>
        <Link to="/log-workout" className="hover:text-blue-500 transition">
          Workout
        </Link>
        <Link to="/goals" className="hover:text-blue-500 transition">
          Goals
        </Link>
        <Link to="/history" className="hover:text-blue-500 transition">
          History
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
