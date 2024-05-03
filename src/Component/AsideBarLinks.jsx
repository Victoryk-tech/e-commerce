import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
export const AsideBarLinks = () => {
  return (
    <div className="space-y-5 mt-12 text-black mx-2 transition-all ease-in duration-500">
      <NavLink
        className={`flex items-center justify-start  gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500`}
      >
        <IoHomeOutline />
        Dashboard
      </NavLink>

      <NavLink
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500`}
      >
        <CgProfile />
        Your Profile
      </NavLink>

      <NavLink
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500`}
      >
        <MdBorderColor />
        Orders
        <a href="#" className="bg-[#F3C294] px-[5px] rounded-[5px] font-bold  ml-12">4</a>
      </NavLink>

      <NavLink
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500`}
      >
        <IoCartOutline />
        Your Cart
        <a href="#" className="bg-[#06E775] px-[5px] rounded-[5px]  ml-7 font-bold">6</a>
      </NavLink>

      <NavLink
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500  place-self-end`}
      >
        <CiLogout />
        Logout
      </NavLink>
    </div>
  );
};
