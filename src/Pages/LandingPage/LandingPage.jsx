import React from "react";
import { Special } from "../../../src/Component/Special.jsx";
import { Notify } from "../../../src/Component/Notify.jsx";
import { Hero } from "../../../src/Component/Hero.jsx";

export const LandingPage = () => {
  return (
    <div
      className="bg-[#00302E] text-white pt-2
    "
    >
      <Hero />
      <Special />
      <Notify />
    </div>
  );
};
