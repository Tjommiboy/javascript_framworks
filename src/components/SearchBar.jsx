import React from "react";
import { useState, useEffect } from "react";

const SearchBar = ({ search, setSearch }) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState(search);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearch(query);
    }, 300);
    return () => clearTimeout(delay);
  }, [query, setSearch]);

  useEffect(() => {
    if (query.length > 0) {
      const trimmedQuery = query.toLowerCase().trim();
      const filteredSuggestions = items
        .map((item) => item.title)
        .filter((title) => title.toLowerCase().startsWith(trimmedQuery))
        .slice(0, 3);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, items]);

  return (
    <div className="relative flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-indigo-500 px-4 py-2 w-full max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full bg-white border border-gray-300 w-full max-w-md mt-1 rounded-md shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
