import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex bg-gray-100 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
