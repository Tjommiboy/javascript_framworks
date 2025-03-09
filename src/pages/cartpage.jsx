import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [editingQuantity, setEditingQuantity] = useState({});

  useEffect(() => {
    console.log("Cart Data:", cart);
  }, [cart]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const initialQuantity = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setEditingQuantity(initialQuantity);
  }, [cart]);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      setEditingQuantity((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
      updateQuantity(productId, quantity);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl text-indigo-500 text-center font-bold mb-2">
        Shopping Cart
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-amber-50 p-2 shadow-lg rounded-lg">
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b p-3 gap-3"
                >
                  {/* Product Thumbnail */}
                  <img
                    src={item.image.url}
                    alt={item.image.alt || "Product Image"}
                    className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded"
                  />

                  {/* Product Info */}
                  <div className="flex flex-col items-center sm:items-start flex-1 min-w-32">
                    <span className="text-sm sm:text-base font-semibold text-center sm:text-left max-w-[150px] truncate">
                      {item.title}
                    </span>
                    <span className="text-gray-500">
                      ${item.price.toFixed(2)} each
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="px-3 py-1 bg-gray-300 rounded text-lg"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={editingQuantity[item.id] || item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      min="1"
                      className="w-12 text-center border rounded"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 bg-gray-300 rounded text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-right font-semibold w-20">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Total Price */}
              <h3 className="text-lg font-bold mt-4 text-right">
                Total: ${totalPrice.toFixed(2)}
              </h3>

              {/* Buttons */}
              <div className="flex flex-row justify-between mt-4 gap-2">
                <button
                  onClick={clearCart}
                  className="bg-gray-400 text-white p-2 rounded w-full"
                >
                  Clear Cart
                </button>
                <Link to="/checkout" className="w-full">
                  <button className="bg-green-500 text-white p-2 rounded w-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
