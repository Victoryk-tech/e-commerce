import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Logo } from "../Shared/Logo";
import { AsideBarLinks } from "./AsideBarLinks";

export const AsideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="md:col-span-2  py-8 bg-[#FBFBFB] md:pl-8">
      <div className=" md:flex items-center">
        <div className="hidden md:flex">
          <Logo />
        <h1 className="hidden md:block text-black font-[700] text-[28px]">
          Lilies
        </h1></div>

        <div className=" md:hidden transition-all text-black relative">
          <p onClick={handleSideBar}>
          <RiMenu2Fill size={30}/> 
          </p>
          {/* sidebar */}
          {sideBar && (
            <div className="md:hidden w-[60%] sm:w-[50%] left-0  h-screen top-0 pt-4 rounded-l-lg shadow-2xl bg-[#FBFBFB] z-50 transition-all duration-700 ease-linear fixed">
              <div
                className=" flex justify-between p-2 text-black"
                onClick={handleSideBar}
              >
               <div className="flex">
               <Logo/>
               <h1 className="md:block text-black font-[700] text-[28px]">
          Lilies
        </h1>
               </div>
                <IoMdClose size={30} />
              </div>
              <div className="ml-1 text-[24px] space-y-4 text-black">
                <AsideBarLinks />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <AsideBarLinks />
      </div>
    </div>
  );
};
