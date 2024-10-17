'use client'
import React from "react";
import FoodCard from "../../../Components/UI/FoodCard";
import { FoodData } from "../../../Data/Data";
import Button from "../../../Components/UI/Button";
import { useRouter } from "next/navigation";


const DeliveryPartner = () => {
  const router = useRouter()
  return (
    <div className="container">
      <div className="flex  flex-col gap-5 2xl:gap-10">
        <div className="flex flex-col  gap-3">
          <div className="border-b-[4px] max-w-max mx-auto border-[#fc7344]">
            <p className="text-[20px] text-center  font-semibold text-[#fc7344]">
              Our Special Food
            </p>
          </div>
          <h1 className="font-Poppins text-[28px] text-center  xl:text-[42px] font-semibold">
            Your Favourite Food Delivery Partner
          </h1>
        </div>
        <div className="w-full">
          <FoodCard data={FoodData} />
        </div>

        <div onClick={() => (router.push('/services'))} className="max-w-max w-full mx-auto">
          <Button className="2xl:px-10 2xl:py-5 py-3 px-5 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer  bg-[#fc7344] rounded-[5px]">
            <span>See all our services</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;
