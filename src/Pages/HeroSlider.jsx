import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.webp";
import heroImg3 from "../assets/heroImg3.jpg";
import heroImg4 from "../assets/heroImg4.avif";

const HeroSlider = () => {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  return (
    <div className="my-10">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
             
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent rounded-lg"></div>

              <div className="absolute inset-0 flex flex-col md:justify-center justify-start items-start p-8 md:pl-16 text-white">
                <h2 className="text-xl md:text-4xl font-bold mb-2 ">
                  <span className=" text-[#5c5cfd]">CozyCompanions –</span> <br />
                  <span className="text-[#F7A703]">Winter Pet Care Made Warm & Fun</span>
                </h2>
                <p className="text-sm md:text-xl md:w-[500px] opacity-70">
                  Keep your furry friends snug and stylish this winter! Explore
                  our tips, outfits, and care routines to ensure your pets enjoy
                  the cold season safely and happily.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
