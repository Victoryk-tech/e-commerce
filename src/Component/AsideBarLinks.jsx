import React, { useContext, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CartContext } from "./features/ContextProvider";
import { CartProduct } from "./CartProduct";

export const AsideBarLinks = () => {
  const [mode, setMode] = useState(false);
  const { cartState } = useContext(CartContext);
  const toggleMode = () => {
    setMode(!mode);
  };

  const [check, setCheck] = useState(true);
  const toggleCheck = () => {
    setCheck(!check);
  };

  const [eck, setEck] = useState(true);
  const toggleEck = () => {
    setEck(!eck);
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
        <p onClick={toggleEck}>Orders</p>
        <a
          href="#"
          className="bg-[#F3C294] px-[5px] rounded-[5px] font-bold  ml-12"
        >
          4
        </a>

        {eck && (
          <div className="modal fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex  justify-center md:justify-end items-center md:items-end">
            <div
              className="flex flex-col justify-start md:justify-center items-center gap-4 p-4 w-[58%] md:w-[35%] h-full bg-transparent text-black"
              onClick={toggleEck}
            ></div>
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
          {cartState.totalQuantity}
        </a>

        {mode && (
          <div className="modal fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex  justify-start md:justify-start items-start md:items-start">
            {/* modal for items */}
            <div
              className="flex flex-col justify-start md:justify-start items-start gap-4 p-2 left-0 w-[55%] h-full bg-transparent text-black"
              onClick={toggleMode}
            ></div>
            <div className="flex flex-col justify-start md:justify-start items-center gap-4 p-2 w-[45%] h-full bg-white text-black">
              <div className=" flex flex-col justify-start  items-start w-full h-full gap-4 text-black">
                <p>Cart</p>

                <div className="flex flex-col items-center gap-4">
                  <nav className="flex items-start md:items-start text-center justify-start w-full md:space-x-3">
                    <h1 className="w-[200px]">Item</h1>
                    <h1 className="w-[100px]">Qty</h1>
                    <h1 className="w-[100px]">Unit price</h1>
                    <h1 className="w-[100px]">Subtotal</h1>
                  </nav>

                  {cartState.cart.map((item, index) => {
                    return (
                      <div>
                        <CartProduct key={index} cartItems={item} />
                      </div>
                    );
                  })}
                  <div>
                    <p>Total items:{cartState.totalQuantity}</p>
                    <p>Total Price:{cartState.totalPrice.toLocaleString()}</p>
                  </div>

                  <a
                    href="#"
                    className="text-[#FBDDBB] fixed bottom-10 ml-4 bg-[#00302E] py-3 px-[6rem] md:px-[12rem] rounded-[5px] font-[500] text-[1[4px]"
                    onClick={() => {
                      setMode(!mode);
                      setCheck(!check);
                    }}
                  >
                    CHECK OUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {checkout} */}
        {check && (
          <div className=" modal absolute w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex  justify-start md:justify-start items-start md:items-start">
            <div
              className="flex flex-col justify-start md:justify-start items-start gap-4 p-2 left-0 w-[65%] h-full bg-transparent text-black"
              onClick={toggleCheck}
            ></div>
            <div className="flex flex-col justify-start md:justify-center items-start gap-4 px-12  right-0 w-[35%] h-full bg-white text-black">
              <p>checkout</p>

              <form
                action="form"
                className="space-y-8 w-full flex flex-col justify-center items-start
  "
              >
                <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-36 rounded-[5px] text-[#00302E87]">
                  <input
                    type="number"
                    placeholder="Card Number"
                    className="border-none outline-none"
                  />
                </div>

                <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-36 rounded-[5px] text-[#00302E87]">
                  <input
                    type="number"
                    placeholder="Exp Date"
                    className="border-none outline-none"
                  />
                </div>

                <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-36 rounded-[5px] text-[#00302E87]">
                  <input
                    type="number"
                    placeholder="CVV/CVV2"
                    className="border-none outline-none"
                  />
                </div>

                <div className="flex justify-between text-center border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-36 rounded-[5px] text-[#00302E87]">
                  <input
                    type="number"
                    placeholder="Card Pin"
                    className="border-none outline-none"
                  />
                </div>

                <button className="text-[#FBDDBB] bg-[#00302E] py-2 px-[2rem] md:px-[7.8rem] text-nowrap rounded-[5px] font-[500] text-[18px]">
                  Make payment
                </button>
              </form>
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
