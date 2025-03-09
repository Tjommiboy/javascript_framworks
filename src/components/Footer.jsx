import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-indigo-500 border-t border-indigo-200 text-center py-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between">
        <div>
          <p className="text-amber-400 mt-3 text-xs">
            Copyright anandchetty5071@gmail.com 2025
          </p>
        </div>
        <div className="flex m-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="text-amber-400 mr-3" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-amber-400 mr-3" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter className="text-amber-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
