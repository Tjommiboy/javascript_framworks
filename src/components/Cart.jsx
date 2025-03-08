import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="flex">
      <BsCart3 className="text-amber-300 mt-1" />
      <span className="text-amber-300">
        ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </span>
    </div>
  );
};

export default Cart;
