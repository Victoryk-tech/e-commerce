import React from "react";
import bon from "../../public/assets/Bon.png";

export const Bon = () => {
  return (
    <div className="h-full w-full">
      <img src={bon} className="w-full md:w-[70%] h-[70%] object-contain pt-24" />
    </div>
  );
};
