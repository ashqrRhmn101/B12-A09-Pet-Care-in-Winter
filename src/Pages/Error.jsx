import React from "react";
import errorImg from "../assets/errorImg.jpg";
import { Link } from "react-router";


const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        className="w-full max-w-md rounded-2xl mb-6"
        src={errorImg}
        alt="Error 404"
      />
      <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
        Error 404
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center">
        Oops! The page you're looking for doesn't exist. <br />
        It might have been moved or deleted.
      </p>
      <Link to="/">
        <button className="btn text-blue-500">Go Back</button>
      </Link>
    </div>
  );
};

export default Error;
