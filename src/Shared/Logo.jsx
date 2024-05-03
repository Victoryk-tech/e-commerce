import React from "react";
import logo from "../../public/assets/Logo.png";

export const Logo = () => {
  return (
    <div className="h-10 w-10">
      <img src={logo} className="w-full h-full object-contain" />
    </div>
  );
};
