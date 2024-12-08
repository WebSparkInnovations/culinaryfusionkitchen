'use client'
import React from "react";
import FoodCard from "../../../Components/UI/FoodCard";
import { FoodData } from "../../../Data/Data";
import Button from "../../../Components/UI/Button";
import { useRouter } from "next/navigation";


const DeliveryPartner = () => {
  const router = useRouter()
  return (
    <div className="container my-6 xl:my-10">
      <div className="flex  flex-col  2xl:gap-10">
        <div className="flex flex-col  gap-3">
          <div className="border-b-[4px] max-w-max mx-auto border-[#fc7344]">
            <p className="text-[14px] xl:text-[16px] text-center  font-semibold text-[#fc7344]">
              Our Special Food
            </p>
          </div>
          <h1 className="font-Poppins text-[24px] sm:text-[28px] md:text-[32px] text-center font-semibold">
            Your Favourite Food Delivery Partner
          </h1>
        </div>
        <div className="w-full">
          <FoodCard data={FoodData} />
        </div>

        <div onClick={() => (router.push('/services'))} className="max-w-max w-full mx-auto">
          <Button className="xl:px-8 xl:py-4 py-[10px] px-4 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer text-[16px] sm:text-[18px] 2xl:text-[20px]  bg-[#fc7344] rounded-[5px]">
            <span>See all our services</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;
