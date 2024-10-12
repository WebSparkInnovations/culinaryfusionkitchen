import Image from "next/legacy/image";
// import Image from 'next/legacy/image'
import React from "react";
import Button from "../../Components/UI/Button";

const AboutChef = () => {
 
  return (
    <div className="bg-[#fc7344] py-20">
      <div className="container">
        <div className="flex  gap-28 items-center  max-w-max mx-auto xl:justify-between w-full">
          <div className="flex flex-col max-w-[700px]   gap-5 xl:gap-7 w-full">
            <div className="flex flex-col   gap-3 lg:gap-6">
              <div className="max-w-max">
              <h1 className="uppercase border-b-[5px] border-white text-white font-Poppins font-semibold text-[28px] md:text-[32px] xl:text-[42px]">
                About Chef
              </h1>
              </div>
              <div className="flex flex-col  gap-2">
                
                <p className="font-Poppins text-[16px] xl:text-[18px] text-white text-center sm:text-start  xl:leading-7">
                  {" "}
                  Here are a few lines that highlight Chef Malik's abilities:

"With a passion for culinary innovation and a keen eye for detail, Chef Malik elevates every dish to a masterpiece. His expertise in blending diverse flavors and crafting unique presentations showcases his unparalleled talent and dedication to the art of cuisine. Whether it's a gourmet dinner or a casual brunch, Chef Malik brings an unforgettable dining experience that delights the senses and leaves a lasting impression."
                </p>
              </div>
            </div>
            {/* <div>
            <Button className="bg-[#A7731A] text-white text-[12px] sm:text-[13px] xl:text-[14px] xl:px-[18px] px-[16px] text-center xl:py-[10px] py-[8px] border-none rounded-3xl">
              Learn more
            </Button>
          </div> */}
          </div>
          <div className="flex flex-1 justify-center items-center  w-full">
            <Image
              className=" w-full h-full rounded-[30px]"
              src="/assets/images/chef.png"
              height={300}
              width={300}
              alt="no-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChef;
