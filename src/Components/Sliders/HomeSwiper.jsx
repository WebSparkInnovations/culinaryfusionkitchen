'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GiKnifeFork } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { useRouter } from "next/navigation";

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from '../UI/Button';


const HeroData = [
  {
    icon: <GiKnifeFork className="text-[#fe4a51] w-4 h-4 2xl:w-6 2xl:h-6" />,
    text: "Philadelphia",
  },
  {
    icon: <AiOutlineClockCircle className="text-[#fe4a51] w-4 h-4 2xl:w-6 2xl:h-6" />,
    text: "Philadelphia",
  },
  {
    icon: <RxPerson className="text-[#fe4a51] w-4 h-4 2xl:w-6 2xl:h-6" />,
    text: "Philadelphia",
  },
];
export default function HeroSection() {
  const router = useRouter();
  // Define your images array
  const images = [
    "/assets/images/sliderbg1.jpg",
    "/assets/images/sliderbg2.jpg",
  ];

  return (
    <div className="relative w-full">
      {/* Swiper as background */}
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 6000, // Time between transitions in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: '400px' }} // Set height for the swiper
      >
        {/* Map over images array to create Swiper slides */}
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                height: '100%',    // Make image take full height of the slide
                width: '100%',      // Make image take full width of the slide
                objectFit: 'cover', // Ensures the image covers the slide area without distortion
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 z-10">
        <div className="relative flex flex-col justify-between max-w-[700px] w-full gap-7 2xl:gap-10 text-center text-white z-10">
          <h1 className="text-[30px] md:text-[38px] lg:text-[44px] 2xl:text-[55px] font-bold uppercase">
            Culinary Fusion Kitchen
          </h1>
          <div className="flex gap-5 sm:gap-14 max-w-[300px] w-full sm:max-w-max flex-wrap justify-center font-Poppins mx-auto">
            {HeroData.map((ls, index) => (
              <div key={index} className="flex items-center gap-2 2xl:gap-3">
                {ls.icon}
                <p className="text-[16px] 2xl:text-[18px]">{ls.text}</p>
              </div>
            ))}
          </div>
          <div
            onClick={() => router.push('/services')}
            className="max-w-max sm:mt-5 2xl:mt-0 w-full mx-auto"
          >
            <Button className="px-4 py-2 2xl:px-7 2xl:py-4 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer bg-[#fc7344] rounded-[5px]">
              <span className="text-[14px] 2xl:text-[16px]">View Services</span>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
