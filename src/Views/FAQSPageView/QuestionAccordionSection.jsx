'use client';
import React, { useState, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const questionsData = [
  {
    question: "What is Culinary Fusion?",
    answer: "Culinary Fusion is a catering company specializing in a variety of global cuisines."
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by contacting us via the 'Contact Us' form or calling our customer service."
  },
  {
    question: "What cuisines do you offer?",
    answer: "We offer a wide range of cuisines including Italian, Asian, Mediterranean, and more."
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have a variety of vegetarian and vegan options."
  },
  {
    question: "Can I customize the menu?",
    answer: "Absolutely! We offer customizable menus to suit your preferences and dietary needs."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver to most areas in the city. Please contact us to check if we deliver to your location."
  }
];

const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-4 bg-[#f8d8ce] py-4 focus:outline-none"
      >
        <span className="text-left text-lg font-semibold">{question}</span>
        <span className="text-xl">
          {isOpen ? <FaArrowUpLong className="text-[#f9a68a]" /> : <IoIosArrowDown className="text-[#f9a68a]" />}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
        }}
      >
        <div className="p-10 bg-[#e9dcd8] text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="container mx-auto p-5">
 <div className="flex flex-col items-center gap-2 max-w-[400px] mx-auto w-full">
  <h2 className="text-[18px] font-medium tracking-widest text-[#fc7344]">FAQS</h2>
 <h2 className="text-2xl font-bold mb-8 text-center">Questions About the Menu or Service Check out down</h2>
 </div>
      {questionsData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
