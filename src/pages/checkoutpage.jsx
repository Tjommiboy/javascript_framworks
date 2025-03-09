import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext"; // Ensure correct path

const CheckoutSuccess = () => {
  const { clearCart } = useCart(); // ✅ Access clearCart from context
  const navigate = useNavigate();

  useEffect(() => {
    clearCart(); // ✅ Clear the cart when this page loads
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-green-500">
        Checkout Successful!
      </h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase!</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CheckoutSuccess;
