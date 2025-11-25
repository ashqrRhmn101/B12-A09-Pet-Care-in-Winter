import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import HeroSlider from "./HeroSlider";
import ServicesCard from "./ServicesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Tips from "./Tips";
import VetsCard from "./VetsCard";
import PetEssentials from "./PetEssentials";

const Home = () => {
  const data = useLoaderData();
  // console.log(data)

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
      <div>
        <HeroSlider />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-[#F7A703] text-center pb-5">
          Popular Winter Care Services
        </h1>
        <div className=" px-12 py-8 bg-[#05050d08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
            {data.slice(0, 6).map((card) => (
              <div key={card.serviceId} data-aos="fade-up">
                <ServicesCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 text-center">
        <Link to="/services">
          <button className="btn bg-[#303082] hover:bg-[#F7A703] text-white">
            See More
          </button>
        </Link>
      </div>

      {/* Tips Card */}
      <div>
        <Tips />
        <PetEssentials />
      </div>
      {/* Vets Card */}
      <div className="bg-[#4731012f]">
        <div className="container mx-auto">
          <VetsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
