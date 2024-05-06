import React from "react";
import { Burgers } from "../Shared/Burgers";

export const Special = () => {
  return (
    <div className="px-4 md:px-12  ">
      <div className="flex flex-col items-center justify-center text-center pb-6 md:pb-20">
        <h1 className="font-[700] text-[30px]">Special Meals of the day!</h1>
        <p>
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>

      <div>
        <Burgers />
      </div>
    </div>
  );
};
