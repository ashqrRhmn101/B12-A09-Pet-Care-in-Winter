import React from "react";
import { Link } from "react-router";

const ServicesCard = ({ card }) => {
  const { serviceName, rating, price, image, serviceId } = card;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-56 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-between p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
          {serviceName}
        </h3>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xs sm:text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
            ⭐ {rating}
          </span>
          <span className="text-base sm:text-lg font-bold text-blue-600">
            ${price}
          </span>
        </div>

        <Link to={`/card-details/${serviceId}`}>
          <button className="w-full btn bg-[#303082] hover:bg-[#F7A703] text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
