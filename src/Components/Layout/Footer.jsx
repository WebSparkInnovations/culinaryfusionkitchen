'use client'
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter()

  return (
    <div className="bg-[#fc7344] pt-7 xl:pt-10">
      <div className="container flex flex-col gap-8 2xl:gap-16">
        <div className="w-full  mx-auto">
          <p className="text-[14px] md:text-[16px] 2xl:text-[20px] text-center text-white">Greater Philadelphia Area | 123.123.1000 | CulinaryfusionKitchen@gmail.com</p>
        </div>
        <div className="max-w-max flex gap-5 lg:gap-24 mx-auto">
          <div onClick={() => window.open('https://www.instagram.com/cfkdummy/', '_blank', 'noopener,noreferrer')} className="flex hover:cursor-pointer gap-1 onClick={(() => router.push('https://www.instagram.com/cfkdummy/'))}2xl:gap-3 items-center max-w-max">
            <p className="text-[14px] md:text-[16px] 2xl:text-[20px] text-white">Instagram</p>
            <IoLogoInstagram className="text-white text-[22px] 2xl:text-[28px] " />

          </div>
          <div onClick={() => window.open('https://www.tiktok.com/@culinaryfusionkitchen?_t=8qrFanWFFGg&_r=1', '_blank', 'noopener,noreferrer')} className="flex gap-1 hover:cursor-pointer 2xl:gap-3 max-w-max items-center">
            <p className="text-[14px] md:text-[16px]  2xl:text-[20px] text-white">Tiktok</p>
            <FaTiktok className="text-white text-[20px] 2xl:text-[26px]" />
          </div>
        </div>
      </div>
      <hr className="h-[2px] border-white mt-5 2xl:mt-10" />
      <div className="py-2 2xl:py-4 w-full items-center justify-center flex gap-1 2xl:gap-2">
        <FaRegCopyright className="text-white" /><span className="text-[14px] md:text-[16px] 2xl:text-[20px] text-white">2023 Culinary Fusion Kitchen</span></div>
    </div>

  );
};

export default Footer;
