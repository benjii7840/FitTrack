import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex p-8  items-center justify-between">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
