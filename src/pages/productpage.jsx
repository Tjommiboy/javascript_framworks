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
        console.log(data);
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
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-blue-200">
        <Spinner loading={loading} />
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <div className="flex flex-col md:flex-row gap-6 bg-amber-50 p-6 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-auto rounded-xl shadow-xl"
            src={product.image?.url}
            alt={product.title}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold text-indigo-500">
            {product.title}
          </h2>
          <p className="text-lg text-gray-500">{product.description}</p>

          <p className="text-xl font-semibold text-indigo-500 mt-4">
            Price: ${product.price}
          </p>

          {product.discountedPrice !== product.price && (
            <p className="text-xl font-semibold text-green-500 mt-2">
              Discount: ${product.price - product.discountedPrice}
            </p>
          )}

          <p className="text-xl font-semibold text-indigo-400 mt-4">
            {product.discountedPrice !== product.price ? (
              <>New Price: ${product.discountedPrice}</>
            ) : (
              <span className="text-gray-300">No Discount</span>
            )}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-300 hover:bg-indigo-400 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
