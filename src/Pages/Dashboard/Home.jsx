import React from "react";
import Profile from "../../../public/assets/Profile.png";
import items from "../../Component/DataBase/Items";
import Pasteries from "../../../src/Component/Pasteries.jsx";

export const Home = () => {
  return (
    <div className="col-span-12 md:col-span-10 md:py-9 px-1 md:px-10">
      <div className="flex justify-between items-center pl-10 md:py-0 pb-6 md:pb-0">
        <div className="text-black">
          <h1 className="font-bold text-[20px]">Good morning, Victory</h1>
          <p>What delicious meal are you craving today?</p>
        </div>
        <div className="hidden md:block">
          <img src={Profile} alt="" />
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center text-black space-y-4">
        {items.map((item, index) => {
          return (
            <div className="">
              <Pasteries key={index} CartItem={item} /> ;
            </div>
          );
        })}
      </div>
    </div>
  );
};
