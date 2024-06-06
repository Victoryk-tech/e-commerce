import React, { useEffect, useState } from "react";
import { Logo } from "../Shared/Logo";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Header = () => {
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
    <div className="fixed inset-0 z-[999] h-24 flex items-center justify-between text-center px-4 md:px-12 bg-[#00302E] text-white py-6 w-[100%] m-0 p-0 transition-all duration-200">
      <div className="flex items-center text-center">
        <Logo />
        <h1 className="text-white font-[700] text-[26px]">Lilies</h1>
      </div>

      <div>
        <nav
          className="hidden md:flex space-x-8 items-center text-center justify-center 
        "
        >
          <a href="#" className="text-[#FBDDBB] text-[18px] font-[500]">
            Home
          </a>
          <Link to="login">
            <a href="#" className="text-white text-[18px] font-[500]">
              Login
            </a>
          </Link>
          <Link to="signup">
            <a
              href="#"
              className="text-[#00302E] text-[16px] font-[600] bg-[#E2B887] rounded-[7px] p-2"
            >
              Sigin Up
            </a>
          </Link>
        </nav>
        <div className="block md:hidden transition-all relative">
          <p onClick={handleSideBar}>
            <CgMenuRight size={30} />
          </p>
          {/* sidebar */}

          {sideBar && (
            <div className="fixed w-[60%] sm:w-[50%] right-0  h-screen top-0 pt-4 rounded-l-lg shadow-2xl bg-white z-50 transition-all duration-700 ease-linear">
              <div
                className=" flex justify-end p-3 text-black"
                onClick={handleSideBar}
              >
                <IoMdClose size={30} />
              </div>
              <div className="ml-1 text-[24px] space-y-4 text-black">
                <p>Home</p>
                <p>Login</p>

                <p className="text-[#00302E] font-semibold">Sign Up</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
