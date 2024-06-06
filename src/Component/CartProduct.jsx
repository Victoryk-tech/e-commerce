import React, { useContext } from "react";
import { CartContext } from "../../src/Component/features/ContextProvider";

export const CartProduct = ({ cartItems }) => {
  const { id, name, description, amount, timing, packs, image, quantity } =
    cartItems;
  const { dispatch } = useContext(CartContext);

  // Function to remove item from cart
  const removeFromCart = (item) => {
    dispatch({ type: "Remove_From_Cart", payload: item });
  };

  return (
    <div className="w-full text-center flex items-center space-x-2">
      <div className="flex px-5 space-x-2">
        <img src={image} alt="" className="w-[28%] h-[28%]" />
        <div>
          <p className="">{name}</p>
          <p
            className="text-[#C92C33]"
            onClick={() => removeFromCart(cartItems)}
          >
            remove
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-20">
        <p>{quantity}</p>

        <p>{amount}</p>

        <p>30000</p>
      </div>
    </div>
  );
};
