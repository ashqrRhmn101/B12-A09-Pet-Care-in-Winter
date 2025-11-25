import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PetEssentials = () => {

    const [essentials, setEssentials] = useState([]);

useEffect(() => {
    fetch("/essentials.json")
      .then((res) => res.json())
      .then((data) => {
        setEssentials(data);
        AOS.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#FFF8E1]">
      <div className="py-16 container mx-auto mt-12">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center text-[#303082] mb-10"
      >
        Winter Essentials for Your Pet ❄️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {essentials.map((item) => (
          <div
            data-aos="zoom-in"
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-[#303082]">
              {item.name}
            </h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PetEssentials;
