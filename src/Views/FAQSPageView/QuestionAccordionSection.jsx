'use client';
import React, { useState, useRef } from "react";

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
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-4 focus:outline-none"
      >
        <span className="text-left text-lg font-semibold">{question}</span>
        <span className="text-xl">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
        }}
      >
        <div className="pl-2 pr-5 py-3 text-gray-600">
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
      <h2 className="text-2xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
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
