import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogWeight from "./pages/LogWeight";
import LogWorkout from "./pages/LogWorkout";
import History from "./pages/History";
import Goals from "./pages/Goals";

const App = () => {
  return (
    <Routes>
      <Route path="/goals" element={<Goals />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/log-weight" element={<LogWeight />} />
      <Route path="/log-workout" element={<LogWorkout />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default App;
