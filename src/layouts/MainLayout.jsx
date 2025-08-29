import { Outlet } from "react-router-dom";
import { NavBar } from "../components/common";

const MainLayout = () => {
  return (
    <div className="w-full bg-gray-200 min-h-screen font-sans">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
