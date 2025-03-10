import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import Cart from "./Cart";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-purple-700 text-yellow-400 font-bold hover:text-yellow-300 rounded-md px-3 py-2"
      : "text-yellow-400 hover:bg-purple-600 hover:animate-pulse hover:text-yellow-300 hover:font-bold rounded-md px-3 py-2";

  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-500 border-b border-indigo-200 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Desktop Layout: Justify-between (logo left, links right) */}
        <div className="hidden md:flex justify-between items-center h-20">
          {/* Logo on the Left */}
          <NavLink
            to="/"
            className="text-yellow-500 text-3xl font-bold ml-2 hover:shadow-2xl hover:text-yellow-300"
          >
            Gimmi Bid n´Sell
          </NavLink>

          {/* Nav Links + Cart on the Right */}
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/contactPage" className={linkClass}>
              Contact Us
            </NavLink>
            {/* Desktop Cart (right side) */}
            <NavLink to="/cart">
              <Cart />
            </NavLink>
          </div>
        </div>

        {/* Mobile Layout: Centered */}
        <div className="flex md:hidden justify-center items-center h-20">
          <NavLink
            to="/"
            className="text-yellow-500 text-3xl font-bold hover:shadow-2xl hover:text-yellow-300"
          >
            Gimmi Bid n´Sell
          </NavLink>
          <Link to="/cart" className="absolute right-4">
            <Cart />
          </Link>
          <button
            onClick={toggleMenu}
            className="absolute left-4 text-yellow-300"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Modal Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(12,19,28,0.89)] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-indigo-500 p-6 rounded-lg w-4/5 max-w-md text-center">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-yellow-400"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className={linkClass} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink
                to="/contactPage"
                className={linkClass}
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
              <NavLink to="/cart" className={linkClass} onClick={toggleMenu}>
                <Cart />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
