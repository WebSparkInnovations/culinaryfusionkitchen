import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerItems1 = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Contact", link: "/contact" },
  ];

  const footerItems2 = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Services", link: "/services" }, // Changed the link to "/products"
    { id: 3, text: "Testimonials", link: "/testimonials" },
    { id: 4, text: "About Us", link: "/about-us" },
    { id: 5, text: "Gallery", link: "/gallery" },
    { id: 6, text: "FAQs", link: "/FAQ" },
  ];
  return (
    <div className="bg-[#fc7344] py-10 xl:py-16">
      <div className="container">
        <div className="flex gap-6 md:gap-16 xl:justify-between lg:justify-start xl:gap-24  w-full flex-wrap">
          <div className="xl:max-w-[320px] flex flex-col gap-6 w-full">
            <div className="flex gap-2 flex-col">
              <div className="flex max-w-[65px] lg:max-w-[80px] w-full">
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/logo.png"
                  width={90}
                  height={90}
                  alt="logo"
                />
              </div>
              <div className="w-full">
                <p className="text-[14px] xl:text-[18px] font-light font-Poppins text-white">
                  Culinary Fusion is a catering company that blends diverse culinary traditions to create unique, flavorful experiences. They offer customized menus and exceptional service for events of all sizes.{" "}
                </p>
              </div>
            </div>

            <div className="flex max-w-[220px] w-full gap-2">
              {/* <div className='flex hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:cursor-pointer bg-[#D99E39] max-w-[28px] w-full rounded-full justify-center'>
                <Image className='w-full h-full object-contain' src='/assets/images/facebook.png' width={8} height={28} alt='fb-image' />
              </div>
              <div className='flex bg-[#D99E39] hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:cursor-pointer max-w-[28px] w-full rounded-full justify-center'>
                <Image className='w-full h-full object-contain' src='/assets/images/twitter.png' width={14} height={13} alt='fb-image' />
              </div>
              <div className='flex bg-[#D99E39] hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:cursor-pointer max-w-[28px] w-full justify-center rounded-full'>
                <Image className='w-full h-full object-contain' src='/assets/images/instagram.png' width={11} height={11} alt='fb-image' />
              </div>
              <div className='flex bg-[#D99E39] hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:cursor-pointer max-w-[28px] w-full rounded-full justify-center'>
                <Image className='w-full h-full object-contain' src='/assets/images/youtube.png' width={15} height={15} alt='fb-image' />
              </div> */}
            </div>
          </div>

          <div className="flex flex-1 w-full justify-between flex-wrap">
            <div className="max-w-[90px] xl:max-w-[100px]  w-full flex flex-col gap-3 xl:gap-5">
              <div className="w-full">
                <h1 className="text-white font-Poppins font-bold text-[14px] md:text-[16px] xl:text-[18px]">
                  Pages
                </h1>
              </div>
              <div
                className="flex items-center justify-between text-[16px] xl:max-w-[620px] md:max-w-[330px] lg:max-w-[400px] w-full
            "
              >
                <ul className="flex flex-col gap-2 lg:gap-4 xl:gap-2">
                  {footerItems1.map((item) => (
                    <li
                      key={item.id}
                      className="flex cursor-pointer hover:text-[#A7731A]"
                    >
                      {/* Wrap the item text with Link */}
                      <Link href={item.link}>
                        <div className="text-[14px] text-white md:text-[16px] xl:text-[16px]">
                          {item.text}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-[120px]  xl:max-w-[210px] w-full flex flex-col gap-3 xl:gap-5">
              <div className="w-full">
                <h2 className="text-white font-Poppins font-bold text-[14px] md:text-[16px] xl:text-[18px]">
                  Company
                </h2>
              </div>
              <div
                className="flex items-center justify-between  text-[14px] xl:text-[16px] w-full
            "
              >
                <ul className="flex flex-col gap-2 lg:gap-4 xl:gap-2">
                  {footerItems2.map((item) => (
                    <li
                      key={item.id}
                      className="flex cursor-pointer hover:text-[#A7731A]"
                    >
                      {/* Wrap the item text with Link */}
                      <Link href={item.link}>
                        <div className="text-[14px] text-white md:text-[16px] xl:text-[16px]">
                          {item.text}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-max  w-full flex flex-col gap-3 xl:gap-5">
              <div className="w-full">
                <p className="text-white font-Poppins font-bold text-[14px] md:text-[16px] xl:text-[18px]">
                  Contact us
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <div className="w-full">
                      <p className="text-white font-semibold  text-[16px] xl:text-[18px]">
                        Address:
                      </p>
                    </div>
                    <div className="font-Poppins text-white font-light text-[13px] xl:text-[16px]">
                      <p>210 Carter Dr, West Chester, PA 19382</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <div className="w-full">
                      <p className="text-white font-semibold text-[16px] xl:text-[18px]">
                        Email:
                      </p>
                    </div>
                    <div className="font-Poppins text-white font-light text-[14px] xl:text-[16px]">
                      <p> Culinaryfusionkitchen@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <div className="w-full">
                      <p className="text-white font-semibold text-[16px] xl:text-[18px]">
                        Phone:
                      </p>
                    </div>
                    <div className="font-Poppins text-white font-light text-[14px] xl:text-[16px]">
                      <p>+1-203-736-4449</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
