// Navbar.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
          <Link
            to="/"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
