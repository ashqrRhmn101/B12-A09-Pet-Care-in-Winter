import React, { useEffect } from "react";
import ServicesCard from "./ServicesCard";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const data = useLoaderData();

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 10,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="p-10 bg-[#303082]">
        <h1 className="text-[#F7A703] text-3xl font-bold text-center">All Services</h1>
      </div>
      <div className="p-3 bg-[#F7A703]"></div>
      <div className="p-3 bg-[#f7a603b7]"></div>
      <div className="p-3 bg-[#f7a6036d]"></div>
    <div className="px-12 py-8 bg-[#66470325]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {data.map((card) => (
        <div key={card.serviceId} data-aos="fade-up">
          <ServicesCard card={card} />
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
