import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className="  text-indigo-500 px-4 py-2 w-full max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};
export default SearchBar;
