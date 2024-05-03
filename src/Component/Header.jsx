import React from "react";
import { Logo } from "../Shared/Logo";

export const Header = () => {
  return (
    <div className="flex items-center justify-between text-center px-12 bg-[#00302E] text-white py-6">
      <div className="flex items-center text-center">
        <Logo />
        <h1 className="text-white font-[700] text-[26px]">Lilies</h1>
      </div>

      <div>
        <nav
          className="flex space-x-8 items-center text-center justify-center
        "
        >
          <a href="#" className="text-[#FBDDBB] text-[18px] font-[500]">
            Home
          </a>
          <a href="#" className="text-white text-[18px] font-[500]">
            Login
          </a>
          <a
            href="#"
            className="text-[#00302E] text-[16px] font-[600] bg-[#E2B887] rounded-[7px] p-2"
          >
            Sigin Up
          </a>
        </nav>
      </div>
    </div>
  );
};
