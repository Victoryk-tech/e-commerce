import React from "react";
import Pastaa from "../../public/assets/Pastaa.png";
export const FoodModal = () => {
  return (
    <div className="absolute w-[20%] h-full bg-white right-0 p-8 flex flex-col items-center justify-center text-center">
      <img src={Pastaa} alt="" />
      {/* <h1>Blueberry Toasts and smoothie</h1> */}
      {/* <p>
        Just have a single bite of this Black Forest pastry and it will all make
        a proper sense to you. The kick of cherry and rich chocolate of this
        super light, airy pastry will definitely make you feel "wow". The
        perfect combination of cherry cream and rich chocolate can provide the
        ultimate fulfillment to your dessert craving.
      </p> */}
      <div className="flex font-bold">
        <p>NGN 2000.00</p>
        <p>10-20 Mins</p>
        <p>10 Pcs Avail</p>
      </div>
      <div className="flex font-bold">
        <p>-</p>
        <p>3</p>
        <p>+</p>
        <a href="#">Add to cart</a>
      </div>
    </div>
  );
};
