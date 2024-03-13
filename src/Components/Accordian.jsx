"use client";
import React, { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setAnimationDone(true), 200);
  };

  return (
    <div
      className={` border-b  border-gray-600  py-3 ${
        isOpen
          ? "bg-white  transition duration-500"
          : "bg-black transition duration-200 ease-out"
      }`}
    >
      <div
        className="flex justify-between items-center p-4 "
        onClick={toggleAccordion}
      >
        <div
          className={`${
            isOpen ? "px-4  text-black" : "text-white px-0 "
          } transition-all transform duration-500  text-sm`}
        >
          {title}
        </div>
        <svg
          className={`h-6 w-6 transition-transform transform cursor-pointer  ${
            isOpen
              ? "rotate-180 text-black md:-translate-x-8 -translate-x-4  duration-300 "
              : " text-white   duration-300 "
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
          onAnimationEnd={() => setAnimationDone(true)}
          onClick={toggleAccordion}
        >
          <line
            style={{ display: animationDone && isOpen ? "none" : "block" }}
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          ></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-8 pb-8  transform transition-all duration-500`}
      >
        {/* Content of the accordion */}
        <p className="text-sm md:pr-20">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
