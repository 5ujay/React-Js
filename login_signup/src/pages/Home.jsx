import React from "react";
import { Link } from "react-router-dom";
import batmanLogo from "../images/welcome.gif";
import { useAuth } from "../context/Context";
const Home = () => {
  const { user } = useAuth;
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center p-6">
        <img src={batmanLogo} alt="" className="border-2 border-black " />
      </div>
      <h1 className="text-3xl text-center">Welcome </h1>
    </div>
  );
};

export default Home;
