import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tips = () => {
  const [tips, setTips] = useState([]);
  //   console.log(tips)

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        AOS.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <div className="bg-[#19110016]">
      <div className="mt-12 px-8 py-12 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#F7A703]">
          Winter Care Tips for Pets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              data-aos="zoom-in-up"
              key={tip.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
