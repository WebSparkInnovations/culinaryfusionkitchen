"use client";
import Image from "next/legacy/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AboutChef = () => {
  const router = useRouter();

  return (
    <div className="bg-[#fc7344] py-10 2xl:pt-20 2xl:pb-10">
      <div className="container">
        <div className="flex  flex-col-reverse lg:flex-row gap-7   lg:gap-[150px] xl:gap-[180px] items-center  lg:max-w-max mx-auto w-full">
          <div className="flex flex-col  lg:max-w-[600px] 2xl::max-w-[700px]   gap-5 xl:gap-7 w-full">
            <div className="flex flex-col   gap-3 lg:gap-6">
              <div className="max-w-max mx-auto lg:mx-0">
                <h1 className="uppercase border-b-[5px] border-white text-white font-Poppins font-semibold text-[28px] md:text-[32px] xl:text-[36px]">
                  About Chef
                </h1>
              </div>
              <div className="flex flex-col  gap-2">
                <p className="font-Poppins text-[14px] xl:text-[16px] text-white text-center lg:text-start  xl:leading-6">
                  {" "}
                  Here are a few lines that highlight Chef Malik's abilities:
                  "With a passion for culinary innovation and a keen eye for
                  detail, Chef Malik elevates every dish to a masterpiece. His
                  expertise in blending diverse flavors and crafting unique
                  presentations showcases his unparalleled talent and dedication
                  to the art of cuisine. Whether it's a gourmet dinner or a
                  casual brunch, Chef Malik brings an unforgettable dining
                  experience that delights the senses and leaves a lasting
                  impression."
                </p>
              </div>
            </div>
            {/* <div>
            <Button className="bg-[#A7731A] text-white text-[12px] sm:text-[13px] xl:text-[14px] xl:px-[18px] px-[16px] text-center xl:py-[10px] py-[8px] border-none rounded-3xl">
              Learn more
            </Button>
          </div> */}
          </div>
          <div className="flex flex-col gap-5 flex-1 justify-center items-center  w-full">
            <Image
              className=" w-full h-full rounded-[30px]"
              src="/assets/images/chef.png"
              height={350}
              width={350}
              alt="no-image"
            />
            <div className="max-w-max mx-auto flex gap-10 xl:gap-16">
              <div className="group flex items-center justify-center bg-white hover:cursor-pointer p-3 rounded-lg hover:bg-[#2c2c2c] transition duration-300">
                <IoLogoInstagram
                  onClick={() => {
                    const newTab = window.open("", "_blank"); 
                    router.push("https://www.instagram.com/cfkdummy/");
                    newTab.location.href =
                      "https://www.instagram.com/cfkdummy/"; 
                  }}
                  className="text-[#fc7344] group-hover:text-[#E1306C] text-[28px] 2xl:text-[36px] hover:cursor-pointer transition duration-300"
                />
              </div>
              <div className="group flex items-center justify-center bg-white hover:cursor-pointer p-3 rounded-lg hover:bg-[#2c2c2c] transition duration-300">
                <FaTiktok
                  onClick={() => {
                    const newTab = window.open("", "_blank"); 
                    router.push(
                      "https://www.tiktok.com/@culinaryfusionkitchen?_t=8qrFanWFFGg&_r=1"
                    ); // Navigate to the link
                    newTab.location.href =
                      "https://www.tiktok.com/@culinaryfusionkitchen?_t=8qrFanWFFGg&_r=1"; 
                  }}
                  className="text-[#fc7344] group-hover:text-[#69C9D0] text-[26px] 2xl:text-[34px] hover:cursor-pointer transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChef;
