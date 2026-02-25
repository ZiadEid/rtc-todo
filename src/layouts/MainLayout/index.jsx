import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Outlet, useNavigate } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-140 max-w-full mx-auto pt-2 px-2 md:px-0 min-h-dvh flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
