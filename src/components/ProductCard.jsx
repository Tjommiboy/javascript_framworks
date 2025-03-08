import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data, addToCart }) => {
  return (
    <div className="bg-amber-50 rounded-lg shadow-2xl w-full max-w-sm mx-auto flex flex-col h-[450px] p-6">
      <h3 className="text-xl font-semibold mb-2">{data.title}</h3>

      <Link to={`/product/${data.id}`} className="flex flex-col flex-grow">
        <p className="text-gray-600 flex-grow overflow-hidden line-clamp-3">
          {data.description}
        </p>

        <hr className="border-t border-gray-200 my-2" />

        <div className="flex justify-center">
          <img
            alt={data.title}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
            src={data.image.url}
          />
        </div>
      </Link>

      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <p className="text-indigo-400 font-bold">Price: ${data.price}</p>
          <p className="text-indigo-500 font-bold">
            {data.discountedPrice !== data.price && (
              <span className="text-sm font-semibold text-green-500">
                click for discount
              </span>
            )}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-indigo-500 font-bold">Rating: {data.rating}</p>

          <button
            onClick={() => addToCart(data)} // Pass full product object
            className="bg-indigo-300 hover:bg-indigo-400 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
