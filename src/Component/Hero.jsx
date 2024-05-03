import React from "react";
import { Google } from "../Shared/Google";
import { App } from "../Shared/AppStore";
import { Bon } from "../Shared/Bon";

export const Hero = () => {
  return (
    <section>
      <div className="flex justify-between items-center mx-auto w-full h-[90vh] px-12 space-x-8">
        <div className="w-[50%] h-auto flex flex-col items-start justify-center pb-28  pr-10 gap-4">
          <h1 className="text-[50px] font-[500] leading-12">
            Order <strong className="text-[#E2B887]">food</strong> anytime,
            anywhere
          </h1>
          <p className="text-[16px]">
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div className="flex gap-2">
            <Google />
            <App />
          </div>
        </div>

        {/* right side */}
        <div className="w-[50%] h-full flex items-center justify-center pl-10">
          <Bon />
        </div>
      </div>
    </section>
  );
};
