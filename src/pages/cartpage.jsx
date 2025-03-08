import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [editingQuantity, setEditingQuantity] = useState({});

  // ✅ Debugging - Log cart data
  useEffect(() => {
    console.log("Cart Data:", cart);
  }, [cart]);

  // ✅ Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Sync `editingQuantity` with cart items when cart updates
  useEffect(() => {
    const initialQuantity = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setEditingQuantity(initialQuantity);
  }, [cart]);

  // ✅ Handle quantity change (increase, decrease, manual input)
  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      setEditingQuantity((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
      updateQuantity(productId, quantity);
    } else {
      removeFromCart(productId); // Remove if quantity reaches 0
    }
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b p-2">
              <span>{item.title}</span>

              {/* Quantity Adjuster */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={editingQuantity[item.id] || item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  min="1"
                  className="w-12 text-center"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>

              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white p-2 mt-2 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
