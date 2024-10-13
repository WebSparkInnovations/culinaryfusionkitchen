"use client";
import React, { useState } from "react";
import Link from "next/link";
// import SignInModal from "../UI/SignInModal";
// import SearchModal from "../UI/SearchModal";
// import CartModal from "../UI/CartModal";
import Image from "next/legacy/image";
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  // const [isSignInOpen, setIsSignInOpen] = useState(false);
  // const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  // const [isModal, setIsModal] = useState(false);
  // const openSearchModal = () => {
  //   setIsSearchModalOpen(true);
  // };

  // const closeSearchModal = () => {
  //   setIsSearchModalOpen(false);
  // };

  // const openSignInModal = () => {
  //   setIsSignInOpen(true);
  // };

  // const closeSignInModal = () => {
  //   setIsSignInOpen(false);
  // };

  // const openCartModal = () => {
  //   setIsCartModalOpen(true);
  // };

  // const closeCartModal = () => {
  //   setIsCartModalOpen(false);
  // };
  const navbarItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Services", link: "/services" }, // Changed the link to "/products"
    { id: 3, text: "Testimonials", link: "/testimonials" },
    { id: 4, text: "About Us", link: "/about-us" },
    { id: 5, text: "Gallery", link: "/gallery" },
    { id: 6, text: "FAQs", link: "/FAQ" },
  ];

  return (
    <nav className="sticky top-0 bg-white z-[9999] shadow-md ">
      <div className="container">
        <div className=" flex max-w-full items-center justify-between">
          <div className="flex gap-5 lg:gap-10 max-w-max py-3   w-full">
            <div className="flex max-w-[65px] lg:max-w-[80px] w-full">
              <Image
                className="w-full h-full object-cover"
                src="/assets/images/logo.png"
                width={90}
                height={90}
                alt="logo"
              />
            </div>
          </div>
          <div className="hidden md:flex  items-center max-w-max justify-between text-[14px] w-full">
            <ul className="flex gap-7 lg:gap-10 xl:gap-4">
              {navbarItems.map((item) => (
                <li
                  key={item.id}
                  className="flex xl:px-6 xl:py-3 transition-all duration-200 cursor-pointer hover:text-orange-400 hover:scale-105"
                >
                  {/* Wrap the menu item in Link */}
                  <Link href={item.link}>
                    <p className="text-[15px] md:text-[16px] xl:text-[18px]">
                      {item.text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex hidden items-center gap-2 max-w-max xl:gap-4">
            <Button className="py-3 px-5 rounded-[4px] text-white bg-[#fc7344]">
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
            ? "fixed left-0 top-0 w-[40%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-[#1D2130] z-50"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex relative">
          <div className="font-Roboto text-[24px] text-orange-500 font-bold p-6 sm:text-[20px] md:text-[24px] lg:text-[26px]">
            largerthan
            <span className="font-Courgette font-normal text-[25px] sm:text-[24px] lg:text-[26px]">
              i
            </span>
          </div>
          <IoClose
            className="bg-white absolute right-5 top-8 md:right-6 md:top-10 cursor-pointer"
            onClick={() => setNav(false)} // Closes the sidebar and overlay
          />
        </div>

        <ul className="uppercase p-6">
          {navbarItems.map((item) => (
            <li className="py-3 border-b border-b-white lg:flex" key={item.id}>
              <a
                href={item.link}
                className="font-medium text-[20px] text-orange-500 md:flex"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay - Opens and closes with the sidebar */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${nav ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setNav(false)} // Closes the sidebar when the overlay is clicked
      ></div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-[#1D2130] z-50"
            : "fixed left-[-100%]"
        }
      >
        <div className="relative">
          <IoClose
            className="bg-white absolute right-4 top-4 md:right-6 md:top-10 cursor-pointer"
            onClick={() => setNav(false)} // Closes the sidebar and overlay
          />
        </div>

        <div className="flex flex-col px-4">
          <div className="font-Roboto text-[24px] text-orange-500 font-bold  py-10 sm:text-[20px] md:text-[24px] lg:text-[26px]">
            Culinary Fusion Kitchen
          </div>

          <ul className="uppercase">
            {navbarItems.map((item) => (
              <li
                className="py-3 border-b border-b-white lg:flex"
                key={item.id}
              >
                <a
                  href={item.link}
                  className="font-medium text-[20px] text-orange-500 md:flex"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay - Opens and closes with the sidebar */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${nav ? "opacity-10 z-40" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setNav(false)} // Closes the sidebar when the overlay is clicked
      ></div>
    </nav>
  );
};

export default Navbar;
