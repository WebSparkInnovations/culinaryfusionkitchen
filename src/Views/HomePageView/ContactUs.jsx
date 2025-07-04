"use client";
import React from "react";
import ContactForm from "../../Components/Shared/ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="w-full flex flex-col gap-2 items-center ">
      <div className="border-b-[2px] max-w-max mx-auto border-[#fc7344]">
      <p className="text-[14px] md:text-[16px] text-center font-semibold text-[#fc7344]">
            Contact Us
          </p>
        </div>

        <div className="max-w-[800px] w-full px-2 lg:px-0">
          <h1 className="font-Poppins text-[28px] md:text-[32px] text-center font-semibold">
            Please fill the form below and we will contact you within 24 hours
          </h1>
        </div>
      </div>
      <div
        className="flex bg-cover"
        style={{ backgroundImage: `url("assets/images/formimage.jpg")` }}
      >
        <div className="bg-black/40 relative flex w-full">
          <div className="container">
            <div className="flex flex-col gap-8 lg:gap-14  lg:flex-row  py-10  justify-between">
              <div className="xl:max-w-[780px] mx-auto border-[5px] border-[#fc7344] bg-[#f7f7f7] shadow-2xl rounded-2xl  px-8 py-12 gap-6 w-full flex flex-col">
                <h1 className="font-Apple text-center text-[#0e2b3d] text-[26px] font-bold">
                  Connect With Us for Personalized Catering Solutions
                </h1>
                <p className="text-[#9b9b9b] text-[15px] text-center font-Apple leading-6">
                  Have questions or want to discuss your event details? Our
                  dedicated team is ready to craft a tailored catering
                  experience just for you. Fill out the form below, and let’s
                  bring your vision to life with exceptional flavors and
                  service!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
