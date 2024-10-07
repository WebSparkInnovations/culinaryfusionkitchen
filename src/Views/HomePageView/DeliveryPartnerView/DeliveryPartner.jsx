import React from "react";
import FoodCard from "../../../Components/UI/FoodCard";
import { FoodData } from "../../../Data/Data";
import Button from "../../../Components/UI/Button";

const DeliveryPartner = () => {
  return (
    <div className="container">
      <div className="py-14 flex  flex-col gap-10">
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
        <div className="w-full flex  flex-wrap  py-5 justify-center gap-10">
          <FoodCard data={FoodData} />
        </div>
        <div className="max-w-max w-full mx-auto">
          <Button className="px-10 py-5 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer  bg-[#fc7344] rounded-[5px]">
            <span>See all our services</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;
