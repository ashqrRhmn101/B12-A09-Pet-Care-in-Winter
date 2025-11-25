import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCardDetails = ({ service }) => {
  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  const defaultImage =
    "https://via.placeholder.com/400x400.png?text=Service+Image";

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10 bg-white rounded-xl shadow-2xl overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Main Container left, right */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          data-aos="fade-right"
          className="bg-gray-100 p-4 flex items-center justify-center"
        >
          <img
            src={service?.image || defaultImage}
            alt={service?.serviceName || "Service"}
            className="w-full h-96 object-cover rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.01]"
          />
        </div>

        {/*Details and Booking Section */}
        <div data-aos="fade-left" className="p-8 space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-extrabold text-[#303082] uppercase tracking-wider mb-1">
              {service?.serviceName || "Service Name"}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Category:{" "}
              <span className="font-semibold text-[#F7A703]">
                {service?.category || "General"}
              </span>
            </p>
          </div>

          {/* Price/Booking Section*/}
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-[#303082]">
              KD <span className="text-2xl">{service?.price || "85.000"}</span>
            </p>
            <div className="text-xs bg-green-100 text-green-700 py-1 px-3 rounded-full font-bold">
              Pay in 4
            </div>
          </div>
          <p className="text-sm text-gray-600 border-b pb-4">
            As low as KD **21.250/month** or 4 interest-free payments.{" "}
            <a
              href="#"
              className="text-[#303082] hover:text-[#F7A703] font-semibold"
            >
              Learn more
            </a>
          </p>

          {/* Rating */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700">
              Provider:{" "}
              <span className="font-normal text-gray-600">
                {service?.providerName || "Service Provider"}
              </span>
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-gray-700">Rating:</span>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                  checked={service?.rating === 1}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                  checked={service?.rating === 2}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                  checked={service?.rating === 3}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                  checked={service?.rating === 4}
                />
                <input
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                  checked={service?.rating === 5}
                />
              </div>
              <span className="text-gray-500 text-sm">
                ({service?.rating || 0}/5)
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Slots Available:{" "}
              <span
                className={`font-semibold ${
                  service?.slotsAvailable > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {service?.slotsAvailable || 0}
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 border-t pt-4">
              Service Description
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {service?.description ||
                "A detailed description of the service and what it entails."}
            </p>
          </div>

          {/* Booking Form*/}
          <form
            onSubmit={handleBook}
            className="space-y-4 pt-4 border-t"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                className="peer input input-bordered w-full h-14 bg-white border-gray-300 focus:border-[#303082] focus:ring-1 focus:ring-[#303082]"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#303082] 
      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#303082] bg-white px-1"
              >
                Your Full Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                className="peer input input-bordered w-full h-14 bg-white border-gray-300 focus:border-[#303082] focus:ring-1 focus:ring-[#303082]"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#303082] 
      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#303082] bg-white px-1"
              >
                Your Email Address
              </label>
            </div>

            {/* Book Button*/}
            <div className="flex space-x-4 items-center">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  type="button"
                  className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                >
                  <FaMinus className="h-3 w-3" />
                </button>
                <span className="px-4 font-semibold text-gray-700">1</span>
                <button
                  type="button"
                  className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                >
                  <FaPlus className="h-3 w-3" />
                </button>
              </div>

              <button
                type="submit"
                className="flex-grow btn bg-[#303082] hover:bg-[#F7A703] text-white font-bold py-3 border-none rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Book Now
              </button>

              <button
                type="button"
                className="btn btn-circle btn-outline border-gray-300 text-gray-600 hover:bg-red-100 hover:border-red-400 hover:text-red-500"
              >
                <FaHeart className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardDetails;
