// Navbar.js

import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logoutClick = () => {
    console.log("hi");
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-black text-lg font-bold">
            Logo
          </a>
        </div>
        <div className="flex">
          <a
            href="/"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="/"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Login
          </a>
          <a
            href="/"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
