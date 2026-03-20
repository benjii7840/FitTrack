import { Outlet } from "react-router-dom";
import navbar from "./navbar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <navbar />
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
