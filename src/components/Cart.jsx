import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative flex items-center">
      {/* Cart Icon */}
      <BsCart3 className="text-amber-300 text-2xl " />

      {/* Cart Badge (Only shows if cartCount > 0) */}
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-amber-300 text-xs font-bold px-2 py-1 rounded-full ">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
