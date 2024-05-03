import React from "react";
import Pastaa from "../../public/assets/Pastaa.png";
import Paata from "../../public/assets/Paata.png";
import { FoodModal } from "../Component/FoodModal";

export const Pasteries = () => {
  return (
    <div className="bg-white flex items-center justify-center md:p-4">
      <div
        className="text-center flex flex-col items-center justify-center px-8
      "
      >
        <img src={Pastaa} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
        <div className="flex items-start justify-between gap-16 text-[17px] mt-4">
          <p className="font-bold ">$10</p> <a href="#" className="text-[#06E775] font-[500]">Add to cart</a>
        </div>

        <FoodModal/>
      </div>

      <div className="text-center flex flex-col items-center justify-center px-8">
        <img src={Paata} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
        <div className="flex items-start justify-between gap-16 text-[17px] mt-4">
          <p className="font-bold ">$10</p> <a href="#" className="text-[#06E775] font-[500]">Add to cart</a>
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center px-8">
        <img src={Pastaa} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p className="text-center text-[15px]">
          Stir fry pasta yada yada yada because of Sesan
        </p>
        <div className="flex items-start justify-between gap-16 text-[17px] mt-4">
          <p className="font-bold ">$10</p> <a href="#" className="text-[#06E775] font-[500]">Add to cart</a>
        </div>
      </div>
    </div>
  );
};
