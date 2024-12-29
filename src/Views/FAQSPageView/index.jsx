"use client";
import React, { useEffect, useRef } from "react";
import ContactUs from "../HomePageView/ContactUs";
import Accordion from "./QuestionAccordionSection";

const Faqs = () => {
  const accordionRef = useRef(null);
  useEffect(() => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-14">
      <ContactUs />
      <div className="max-w-[1140px] w-full mx-auto">
        <p className="text-[14px] xl:text-[17px] text-center text-[#333333] font-semibold">
          Feel free to provide any additional information to help us better
          understand your event needs. We will get in touch with you within 24
          hours to discuss your requirements further. Thank you for considering
          Culinary Fusion Kitchen for your catering needs.
        </p>
      </div>

      {/* Step 3: Attach the ref to the Accordion component */}
      <div ref={accordionRef}>
        <Accordion />
      </div>
    </div>
  );
};

export default Faqs;
