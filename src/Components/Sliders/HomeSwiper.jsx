// components/Slider.js
"use client";
import React, { useEffect, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import Button from "../UI/Button";

const HeroData = [
  {
    icon: <GiKnifeFork className="text-[#fe4a51] w-5 h-5 2xl:w-7 2xl:h-7" />,
    text: "Philadelphia",
  },
  {
    icon: <AiOutlineClockCircle className="text-[#fe4a51] w-5 h-5 2xl:w-7 2xl:h-7" />,
    text: "Philadelphia",
  },
  {
    icon: <RxPerson className="text-[#fe4a51] w-5 h-5 2xl:w-7 2xl:h-7" />,
    text: "Philadelphia",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);

  // Array of background images
  const images = [
    "/assets/images/sliderbg1.jpg",
    "/assets/images/sliderbg2.jpg",
  ];

  // Change image every 5 seconds and manage fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(true);
      }, 1000); // Duration of the fade-out effect
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          isFading ? "opacity-100" : "opacity-30"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Static Content on the Slide */}
      <div className="relative flex flex-col justify-between max-w-[700px] w-full gap-7 2xl:gap-10  text-center text-white z-10">
        <h1 className=" text-[32px] md:text-[44px] 2xl:text-[65px] font-bold uppercase">
          Culinary Fusion Kitchen
        </h1>
        <div className="flex gap-5 sm:gap-14 max-w-[300px] w-full sm:max-w-max flex-wrap justify-center font-Poppins mx-auto">
          {HeroData.map((ls) => (
            <div key={ls.index} className="flex items-center gap-2 2xl:gap-3 ">
              {ls.icon}
              <p className="text-[18px] 2xl:text-[20px]">{ls.text}</p>
            </div>
          ))}
        </div>
        <div className="max-w-max sm:mt-5 2xl:mt-0 w-full mx-auto">
          <Button className="px-6 py-3 2xl:px-9 2xl:py-5 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer  bg-[#fc7344] rounded-[5px]">
            <span>View Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
