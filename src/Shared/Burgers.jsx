import React from "react";
import Sur from "../../public/assets/Sur.png";
import Balls from "../../public/assets/Balls.png";
import MealB from "../../public/assets/MealB.png";

export const Burgers = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center pl-6 text-center">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={Sur} alt="" className="w-[54%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p className="text-nowrap">Stir fry pasta yada yada yada because of Sesan</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img src={Balls} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img src={MealB} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
      </div>
    </div>
  );
};
