import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="bg-[#fc7344] pt-7 xl:pt-10">
      <div className="container flex flex-col gap-16">
        <div className="max-w-max  mx-auto">
          <p className="text-[22px] text-white">Greater Philadelphia Area | 123.123.1000 | CulinaryfusionKitchen@gmail.com</p>
        </div>
        <div className="max-w-max flex gap-24 mx-auto">
          <div className="flex gap-3 items-center max-w-max">
            <p className="text-[22px] text-white">Instagram</p>
            <IoLogoInstagram className="text-white text-[28px]" />

          </div>
          <div className="flex gap-3 max-w-max items-center">
            <p className="text-[22px] text-white">Tiktok</p>
            <FaTiktok className="text-white text-[28px]" />

          </div>
        </div>
      </div>
      <hr className="h-[2px] border-white mt-10" />
      <div className="py-4 w-full items-center justify-center flex gap-2">
        <FaRegCopyright className="text-white" /><span className="text-[22px] text-white">2023 Culinary Fusion Kitchen</span></div>
    </div>

  );
};

export default Footer;
