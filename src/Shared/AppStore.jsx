import React from "react";
import app from "../../public/assets/App.png";

export const App = () => {
  return (
    <div className="h-auto w-full">
      <img src={app} className="w-24 h-full object-contain" />
    </div>
  );
};