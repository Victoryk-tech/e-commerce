import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const AsideBarLinks = () => {
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!mode);
  };

  const [check, setCheck] = useState(false);
  const toggleCheck = () => {
    setCheck(!check);
  };
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

      <div
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500 cursor-pointer`}
      >
        <MdBorderColor />
        <p onClick={toggleCheck}>Orders</p>
        <a
          href="#"
          className="bg-[#F3C294] px-[5px] rounded-[5px] font-bold  ml-12"
        >
          4
        </a>

        {check && (
          <div
            onClick={toggleCheck}
            className="modal fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex flex-col justify-center md:justify-end items-center md:items-end"
          >
            {/* modal for items */}
            <div className="flex flex-col justify-start md:justify-center items-center gap-4 p-2 w-[42%] h-full bg-white text-black">
              <div className=" flex flex-col justify-start  items-start w-full h-full gap-4 text-black">
                <p>Orders</p>

                <table className="w-[500px] text-center">
                  <tr className="text-sm">
                    <th className="w-[200px] text-start">item</th>
                    <th className="w-[100px]">Qty</th>
                    <th className="w-[100px]">price</th>
                    <th className="w-[100px]">status</th>
                  </tr>

                  <tr>
                    <td className="flex">
                      <img src="" alt="" className="w-[20%] h-[28%]" />
                      <div>
                        <p>Stir fry</p>
                        <p className="text-[#C92C33]">remove</p>
                      </div>
                    </td>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>1000</p>
                    </td>
                    <td>
                      <p>Delivered</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500 cursor-pointer`}
      >
        <IoCartOutline />
        <p onClick={toggleMode}>Your Cart</p>

        <a
          href="#"
          className="bg-[#06E775] px-[5px] rounded-[5px]  ml-7 font-bold"
        >
          6
        </a>

        {mode && (
          <div
            onClick={toggleMode}
            className="modal fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex flex-col justify-center md:justify-end items-center md:items-end"
          >
            {/* modal for items */}
            <div className="flex flex-col justify-start md:justify-center items-center gap-4 p-2 w-[45%] h-full bg-white text-black">
              <div className=" flex flex-col justify-start  items-start w-full h-full gap-4 text-black">
                <p>Cart</p>

                <table className="w-[500px] text-center">
                  <tr className="text-sm">
                    <th className="w-[200px] text-start">item</th>
                    <th className="w-[100px]">Qty</th>
                    <th className="w-[100px]">unit price</th>
                    <th className="w-[100px]">sub total</th>
                  </tr>

                  <tr>
                    <td className="flex">
                      <img src="" alt="" className="w-[20%] h-[28%]" />
                      <div>
                        <p>Stir fry</p>
                        <p className="text-[#C92C33]">remove</p>
                      </div>
                    </td>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>1000</p>
                    </td>
                    <td>
                      <p>30000</p>
                    </td>
                  </tr>
                </table>
                <button className="text-[#FBDDBB] bg-[#00302E] py-3 px-[6rem] md:px-[9rem] rounded-[5px] font-[500] text-[14px]">
                  CHECK OUT
                </button>
              </div>

              {/* checkout
              {check &&(
                  <div>
                    <p>checkout</p>
                  </div>
                )} */}
            </div>
          </div>
        )}
      </div>

      <NavLink
        className={`flex items-center justify-start gap-x-2 hover:bg-[#b8bac2]/10 hover:rounded-[8px] p-1 hover:text-stone-500  place-self-end`}
      >
        <CiLogout />
        Logout
      </NavLink>
    </div>
  );
};
