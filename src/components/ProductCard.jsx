import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ data, addToCart }) => {
  return (
    <div className=" bg-amber-50 rounded-lg shadow-2xl max-w-sm w-full mx-auto flex flex-col h-full p-8">
      <h3 className="text-2xl font-semibold m-1">{data.title}</h3>
      <Link to={`/product/${data.id}`}>
        <p className="text-gray-600 m-1 flex-grow">{data.description}</p>
        <hr className="border-t border-gray-200" />

        <div className="mt-auto">
          <p className="text-indigo-400 font-bold m-1">Price: ${data.price}</p>
          <p className="text-indigo-500 font-bold m-1">
            Discounted: ${data.discountedPrice}
          </p>

          <div className="flex justify-center">
            <img
              alt={data.title}
              className="w-70 h-70 object-cover rounded-lg shadow-2xl"
              src={data.image.url}
            />
          </div>
        </div>
      </Link>
      <div className="flex justify-between mt-1">
        <p className="text-indigo-500 font-bold text-center mt-2">
          Rating: {data.rating}
        </p>

        <button
          onClick={() => addToCart(data.id)}
          className="bg-indigo-300 hover:bg-indigo-400 text-white px-2 py-1 rounded mt-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
