// Navbar.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const user = false;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="" className="text-black text-lg font-bold">
            Logo
          </Link>
        </div>
        <div className="flex">
          {user ? (
            <>
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
              <button className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                Logout
              </button>
            </>
          ) : (
            <>
              {" "}
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
