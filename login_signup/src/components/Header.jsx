import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const logoutClick = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            LOGO
          </h1>
        </div>
        <div className="flex space-x-4">
          {user ? (
            <>
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
              <button
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={logoutUser}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
