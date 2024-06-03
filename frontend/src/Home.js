import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      <div className="p-10 bg-gray-100 shadow-lg">
        <h1 className="font-bold text-4xl text-gray-900 mb-4">
          Welcome to My App!
        </h1>
        <p className="text-gray-600 mb-8">
          Please{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>{" "}
          if you have an account, or{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>{" "}
          if not.
        </p>
      </div>
    </div>
  );
};

export default Home;
