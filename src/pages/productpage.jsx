import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import Spinner from "../components/Spinner";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      const apiUrl = "https://v2.api.noroff.dev/online-shop";
      try {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();

        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]); // Add `id` as a dependency

  if (loading) {
    return <p className="text-center text-gray-500">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="flex  justify-center items-center gap-6 my-bg px-4 py-10 pt-40  ">
      <Spinner loading={loading} />
      <div className="bg-amber-50 flex gap-6 m-1 p-4 rounded ">
        <div>
          <img
            className="w-100  rounded-lg shadow-md"
            src={product.image?.url} // Ensure image URL access
            alt={product.title}
          />
          <hr className="border-r border-gray-200" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">
              {product.title}
            </h2>
            <p className="text-lg text-gray-500">{product.description}</p>
            <p className="text-xl font-semibold text-indigo-500 mt-4">
              Price: ${product.price}
            </p>
            <button
              onClick={() => addToCart(product.id)}
              className="bg-indigo-300 hover:bg-indigo-400 text-white px-2 py-1 rounded mt-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
