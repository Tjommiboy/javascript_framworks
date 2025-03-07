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
    <div className="flex m-auto container">
      <div className="flex  justify-center items-center gap-6 my-bg px-4 py-10 pt-40  ">
        <div className="bg-amber-50 flex gap-6 m-1 p-4 rounded ">
          <div>
            <img
              className="w-100  rounded-lg shadow-xl"
              src={product.image?.url}
              alt={product.title}
            />
          </div>
          <div className="border-l-2 border-gray-200  flex flex-col"> </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">
                {product.title}
              </h2>
              <p className="text-lg text-gray-500">{product.description}</p>
              <p className="text-xl font-semibold text-indigo-500 mt-4">
                Price: ${product.price}
              </p>

              <p className="text-xl font-semibold text-indigo-500 mt-4">
                {product.discountedPrice !== product.price && (
                  <p className="text-xl font-semibold text-green-500 mt-4">
                    Discount: ${product.price - product.discountedPrice}
                  </p>
                )}
              </p>
              <p className="text-xl font-semibold text-indigo-400 mt-4">
                {product.discountedPrice !== product.price ? (
                  <>Discounted price ${product.discountedPrice} </>
                ) : (
                  <span className="text-gray-300">No Discount</span>
                )}
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
    </div>
  );
};

export default ProductPage;
