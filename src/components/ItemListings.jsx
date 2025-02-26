import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const ItemListings = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const apiUrl = "https://v2.api.noroff.dev/online-shop";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItem(data.data); // Ensure this matches API structure
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  return (
    <section className="bg-blue-200 px-4 py-10">
      <div className="container-xl lg:container m-auto  ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Item Listings
        </h2>
        {loading && (
          <div className=" absolute inset-0 flex justify-center items-center bg-opacity-50 bg-blue-200 z-10">
            <Spinner loading={loading} />
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {item.map((data) => (
            <div
              key={data.id}
              className=" bg-amber-50 rounded-lg shadow-2xl max-w-sm w-full mx-auto flex flex-col h-full p-8 "
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold m-1">{data.title}</h3>

              {/* Description with flex-grow to prevent pushing content down */}
              <p className="text-gray-600 m-1 flex-grow">{data.description}</p>

              {/* Push everything below the description to a fixed position */}
              <div className="mt-auto">
                <p className="text-indigo-400 font-bold m-1">
                  Price: ${data.price}
                </p>
                <p className="text-indigo-500 font-bold m-1 ">
                  Discounted: ${data.discountedPrice}
                </p>

                {/* Image with padding to ensure spacing */}
                <div className="flex justify-center">
                  <img
                    alt="Product"
                    className="w-70 h-70 object-cover rounded-lg shadow-2xl"
                    src={`${data.image.url}`}
                  />
                </div>

                {/* Rating at the bottom */}
                <p className="text-indigo-500 font-bold text-center mt-2">
                  Rating: {data.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemListings;
