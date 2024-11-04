"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navbarItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Services", link: "/services" },
    { id: 3, text: "Testimonials", link: "/testimonials" },
    { id: 4, text: "About Us", link: "/about-us" },
    { id: 5, text: "Gallery", link: "/gallery" },
    { id: 6, text: "FAQs", link: "/FAQ" },
  ];

  return (
    <nav className="sticky top-0 bg-white z-[9999] shadow-md">
      <div className="container">
        <div className="flex max-w-full items-center justify-between">
          <div className="flex gap-5 lg:gap-10 max-w-max py-3 w-full">
            <div onClick={() => router.push('/')} className="flex hover:cursor-pointer max-w-[55px] lg:max-w-[70px] w-full">
              <Image
                className="w-full h-full object-cover"
                src="/assets/images/logo.png"
                width={80}
                height={80}
                alt="logo"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center max-w-max justify-between text-[14px] w-full">
            <ul className="flex gap-7 lg:gap-10 xl:gap-4">
              {navbarItems.map((item) => (
                <li
                  key={item.id}
                  className="flex xl:px-6 xl:py-3 transition-all duration-200 cursor-pointer hover:text-[#fc7344] hover:scale-105"
                >
                  <Link href={item.link}>
                    <p className="text-[12px] md:text-[14px] xl:text-[16px]">
                      {item.text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex hidden items-center gap-2 max-w-max xl:gap-4">
            <Button onClick={() => router.push('/contact-us')} className="py-[10px] text-[14px] px-5 rounded-[4px] text-white bg-[#fc7344]">
              Contact Us
            </Button>
          </div>
          <div onClick={handleNav} className="flex md:hidden">
            {!nav ? <FaBars size={20} /> : <IoClose size={20} />}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-[#1D2130] z-50"
            : "fixed -left-[100%] top-0 w-[70%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-[#1D2130] z-50"
        }
      >
        <div className="relative">
          <IoClose
            className="bg-[#fc7344] text-white absolute right-4 top-4 md:right-6 md:top-10 cursor-pointer"
            onClick={() => setNav(false)}
          />
        </div>
        <div className="flex flex-col px-4">
          <div className="text-[20px] text-[#fc7344] font-bold max-w-max py-10">
            Culinary Fusion Kitchen
          </div>
          <ul className="uppercase">
            {navbarItems.map((item) => (
              <li
                className="py-3 border-b border-b-white lg:flex"
                key={item.id}
                onClick={() => {
                  setNav(false);
                  router.push(item.link);
                }}
              >
                <span className="font-medium text-[20px] text-[#fc7344] md:flex cursor-pointer">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="max-w-max mt-7 mx-auto">
            <Button onClick={() => {
              setNav(false);
              router.push('/contact-us');
            }} className="sm:py-[14px] py-[10px] font-semibold text-[14px] sm:text-[16px] px-5 sm:px-7 rounded-[4px] text-white bg-[#fc7344]">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${nav ? "opacity-50 z-40" : "opacity-0 pointer-events-none"}`}
        onClick={() => setNav(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
