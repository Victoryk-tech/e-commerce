import React from "react";
import { AsideBar } from "../../Component/AsideBar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="relative grid grid-cols-12 min-h-screen text-[#e7bbbb] w-full h-full">
      <AsideBar />
      <Outlet/>
     
    </div>
  );
  
};
