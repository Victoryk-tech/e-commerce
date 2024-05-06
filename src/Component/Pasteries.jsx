import React, { useState } from "react";
//import Modal from "./Modal";

const Pasteries = ({ item }) => {
  const { name, description, amount } = item;

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center">
      <div className=" text-center flex flex-col items-center justify-center px-8 md:px-9">
        <img
          src={item.image}
          alt=""
          onClick={toggleModal}
          className="w-[40%] h-[28%]"
        />
        <h2 className="font-[700] text-[21px]">{name}</h2>
        <p className="text-center text-[15px]">{description}</p>
        <div className="flex items-start justify-between gap-16 text-[17px] mt-4">
          <p className="font-bold ">{amount}</p>
          <a href="#" className="text-[#06E775] font-[500]">
            Add to cart
          </a>
        </div>
        {modal &&(
          <div
          onClick={toggleModal}
          className="modal fixed w-full h-full bg-[#C4C4C46B]  right-0 top-0 flex flex-col justify-center md:justify-end items-center md:items-end"
        >
          {/* modal for items */}
          <div className="flex flex-col justify-start md:justify-center items-center gap-4 p-4 w-[35%] h-full bg-white text-black">
            <div className=" flex flex-col justify-start md:justify-center items-center w-full h-full gap-4 text-black">
              <img src={item.image} alt="" className="w-[40%] h-[28%]" />
              <h1>Blueberry Toasts and smoothie</h1>
              <p className="text-center text-sm">
                Just have a single bite of this Black Forest pastry and it will all
                make a proper sense to you. The kick of cherry and rich chocolate of
                this super light, airy pastry will definitely make you feel "wow".
                The perfect combination of cherry cream and rich chocolate can
                provide the ultimate fulfillment to your dessert craving.
              </p>
              <div className="flex items-center justify-between gap-8 font-[700]">
                <p>{amount}</p>
                <p>10 - 12 mins</p>
                <p>10 Pcs Available</p>
              </div>
              <div className="flex justify-center items-center gap-16 font-[500]">
                <div className="flex items-center gap-2">
                  <p className="bg-[#F3C294] py-1 px-3 font-[700]">-</p>
                  <p className="font-[700]">3</p>
                  <p className="bg-[#F3C294] py-1 px-3 font-[600]">+</p>
                </div>
    
                <a
                  href="#"
                  className="bg-[#00302E] text-white py-2 px-3 text-[12px]"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        )}
        
      </div>
    </div>
  );
};
export default Pasteries;
