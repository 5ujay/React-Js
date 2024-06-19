import React from "react";
import batmanImage from "../images/profile.png";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <img
              src={batmanImage}
              alt="Batman Profile"
              className="h-64 w-64 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">BATMAN</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            You are BATMAN
          </p>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-700">Men are brave</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
