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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto  py-5  gap-3 sm:gap-5  2xl:gap-10">
      {data?.map((ls, id) => (
        <div
          key={ls.id}
          className="sm:max-w-[450px] lg:max-w-[482px] max-w-[350px]  w-full flex flex-col mx-auto  xl:flex-row  shadow-md hover:scale-105  transition-all ease-out duration-300 rounded-2xl hover:cursor-pointer hover:border-gray-200  border border-transparent"
        >
          <div className="flex flex-col w-full items-center">
            <div className="flex">
              <Image
                className="object-cover rounded-t-2xl w-full h-full"
                width={490}
                height={310}
                src={ls.img}
                alt="no-image"
              />
            </div>
            <div
              onClick={() => handleClick(ls.route)}
              className="group flex py-5 px-3 xl:px-5 xl:py-7 items-center w-full gap-[2px]"
            >
              <p className="font-Poppins text-[#fc7344] group-hover:text-[#e05f38] text-[16px]  font-semibold sm:text-[22px]">
                {ls.service}
              </p>
              <IoIosArrowRoundForward className="text-[#fc7344] group-hover:text-[#e05f38] w-10 h-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
