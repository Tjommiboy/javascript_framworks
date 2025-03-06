import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

const ItemListings = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const apiUrl = "https://v2.api.noroff.dev/online-shop";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setItem(data.data);
        setFilteredItems(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  useEffect(() => {
    const filtered = item.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setFilteredItems(filtered);
  }, [search, item]);

  return (
    <section className="my-bg px-4 py-10 pt-40  ">
      <div className="container-xl lg:container m-auto  ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Item Listings
        </h2>
        <SearchBar search={search} setSearch={setSearch} />
        {loading && (
          <div className=" absolute inset-0 flex justify-center items-center bg-opacity-50 bg-blue-200 z-10">
            <Spinner loading={loading} />
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((data) => (
              <ProductCard key={data.id} data={data} addToCart={addToCart} />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No matching items found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemListings;
