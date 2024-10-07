import Image from "next/legacy/image";
// import Image from 'next/legacy/image'
import React from "react";
import Button from "../../Components/UI/Button";

const AboutTeam = () => {
 
  return (
    <div className="bg-[#fc7344]">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-6 items-center xl:justify-between w-full">
          <div className="max-w-[750px] flex flex-col mt-5 xl:mt-8  gap-5 xl:gap-7 w-full">
            <div className="flex flex-col items-center xl:items-start gap-6 w-full">
              <h1 className="uppercase border-b-[5px] border-[#fc7344] font-Poppins font-semibold text-[28px] md:text-[32px] xl:text-[42px]">
                About Our Team
              </h1>
              <div className="flex flex-col gap-2">
                
                <p className="font-Poppins text-[14px] xl:text-[16px] text-center md:text-start  leading-6 xl:leading-7">
                  {" "}
                  “Welcome to Culinary Fusion Kitchen, where culinary creativity
                  knows no bounds. Our catering company specializes in
                  seamlessly blending diverse culinary traditions to bring you a
                  unique and delightful gastronomic experience. Whether it's
                  crafting sumptuous meals for your daily routine through our
                  meal prep service, adding a touch of gourmet to your office
                  events, or curating a memorable culinary affair for your
                  special occasions, we cater to all. Under the guidance of our
                  esteemed Executive Chef Malik, a culinary maestro with a
                  wealth of experience and a passion for innovation, Culinary
                  Fusion Kitchen continually pushes the boundaries of flavor
                  combinations and culinary artistry. Chef Malik's expertise and
                  dedication ensure that every dish we create is a harmonious
                  fusion of tradition and creativity, promising an unparalleled
                  culinary adventure for our valued clientele. Discover the art
                  of culinary fusion with us, where every bite tells a story of
                  innovation and culinary excellence.”
                </p>
              </div>
            </div>
            {/* <div>
            <Button className="bg-[#A7731A] text-white text-[12px] sm:text-[13px] xl:text-[14px] xl:px-[18px] px-[16px] text-center xl:py-[10px] py-[8px] border-none rounded-3xl">
              Learn more
            </Button>
          </div> */}
          </div>
          <div className="flex max-w-[739px] justify-center items-center  w-full">
            <Image
              className="object-cover w-full h-full rounded-[35px]"
              src="/assets/images/aboutteam.jpg"
              height={480}
              width={690}
              alt="no-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
