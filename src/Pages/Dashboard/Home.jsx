import React from "react";
import Profile from "../../../public/assets/Profile.png";

import { Pasteries } from "../../Shared/Pasteries";

export const Home = () => {
  return (
    <div className="col-span-10 py-9 px-10">
      <div className="flex justify-between items-center">
        <div className="text-black">
          <h1 className="font-bold text-[20px]">Good morning, Oghenevwede!</h1>
          <p>What delicious meal are you craving today?</p>
        </div>
        <div>
          <img src={Profile} alt="" />
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center text-black space-y-20">
        <Pasteries />
        <Pasteries />
      </div>
    </div>
  );
};
