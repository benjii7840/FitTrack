import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogWeight from "./pages/LogWeight";
import LogWorkout from "./pages/LogWorkout";
import Goals from "./pages/Goals";
import History from "./pages/History";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/log-weight" element={<LogWeight />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/history" element={<History />} />
        <Route path="/goals" element={<Goals />} />
      </Route>
    </Routes>
  );
};

export default App;
