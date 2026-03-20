import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent shadow-sm px-8 py-4 flex items-center justify-between gap-8">
      <h1 className="text-black font-bold uppercase tracking-wide">FitTrack</h1>
      <div className="flex gap-6 text-gray-600 text-sm font-medium">
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
