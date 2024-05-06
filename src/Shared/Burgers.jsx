import React from "react";
import Sur from "../../public/assets/Sur.png";
import Balls from "../../public/assets/Balls.png";
import MealB from "../../public/assets/MealB.png";
import Pastaa from "../../public/assets/Peeesstaa.png";

export const Burgers = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3  items-center justify-center px-4 gap-5 md:gap-0 text-center">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={Balls} alt="" className="w-[40%] h-[28%]" />
        <h2 className="font-[700] text-[21px]">Stir Fry Pasta</h2>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
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
