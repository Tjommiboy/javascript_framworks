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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {item.map((data) => (
            <div key={data.id} className="p-4 bg-blue-100 rounded-lg shadow ">
              <h3 className="text-2xl font-semibold m-1 w-120">{data.title}</h3>
              <p className="text-gray-600 m-1">{data.description}</p>
              <p className="text-indigo-400 font-bold m-1">
                Price: ${data.price}
              </p>
              <p className="text-indigo-500 font-bold m-1">
                {" "}
                Discounted: ${data.discountedPrice}
              </p>
              <div className="flex justify-center m-1">
                <img
                  alt="Product"
                  className="w-120 h-120 object-cover rounded-lg"
                  src={`${data.image.url}`}
                ></img>
              </div>
              <p className="text-indigo-500 font-bold">Rating: {data.rating}</p>
            </div>
          ))}
        </div>
        )
      </div>
    </section>
  );
};

export default ItemListings;
