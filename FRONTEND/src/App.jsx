import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogWeight from "./pages/LogWeight";
import LogWorkout from "./pages/LogWorkout";
import History from "./pages/History";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/log-weight" element={<LogWeight />}></Route>
      <Route path="/log-workout" element={<LogWorkout />}></Route>
      <Route path="/history" element={<History />}></Route>
    </Routes>
  );
};

export default App;
