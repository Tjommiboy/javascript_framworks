import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-purple-700 text-yellow-400 font-bold hover:text-yellow-300 rounded-md px-3 py-2"
      : "text-white hover:bg-purple-600 hover:animate-pulse hover:text-yellow-300 hover:font-bold rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-500 border-b border-indigo-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-yellow-400 text-2xl font-bold ml-2 hover:shadow-2xl hover:text-yellow-300">
                Gimmi Bid n´Sell
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/cart" className={linkClass}>
                  Cart
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
