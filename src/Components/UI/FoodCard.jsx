'use client'
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const FoodCard = ({ data }) => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route); // Navigate to the assigned route
  };
  return (
    <>
      {data?.map((data, index) => (
        <div
          key={index}
          className="sm:max-w-[450px] max-w-[265px]  w-full flex flex-col  xl:flex-row  shadow-md hover:scale-105  transition-all ease-out duration-300 rounded-2xl hover:cursor-pointer hover:border-gray-200  border border-transparent"
        >
          <div className="flex flex-col w-full items-center">
            <div className="flex">
              <Image
                className="object-cover rounded-t-2xl w-full h-full"
                width={450}
                height={270}
                src={data.img}
                alt="no-image"
              />
            </div>
            <div
              onClick={() => handleClick(data.route)}
              className="group flex px-5 py-7 items-center w-full gap-[2px]"
            >
              <p className="font-Poppins text-[#fc7344] group-hover:text-[#e05f38] text-[16px] md:text-[18px] font-semibold xl:text-[22px]">
                {data.service}
              </p>
              <IoIosArrowRoundForward className="text-[#fc7344] group-hover:text-[#e05f38] w-10 h-10" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCard;
