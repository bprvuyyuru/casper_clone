import React from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const PromotionsBanner = () => {
  return (
    <div className="bg-[#1E306E] text-white text-sm py-5 px-4 flex justify-between items-center overflow-hidden">
      {/* Left side: Language selector */}
      <div className="hidden md:flex space-x-2">
        <span>EN</span>
        <span>|</span>
        <span>FR</span>
      </div>

      {/* Center: Carousel Text */}
      <div className="flex items-center space-x-4">
        <FaChevronLeft className="hidden md:block text-white cursor-pointer" />
        <p className="whitespace-nowrap">
          Curious? Our Sleep Specialists are{" "}
          <a href="#" className="underline">
            just a call away
          </a>
          .
        </p>
        <FaChevronRight className="hidden md:block text-white cursor-pointer" />
      </div>

      {/* Right side: Find a store */}
      <div className="hidden md:flex items-center space-x-2">
        <a href="#" className="hover:text-gray-300">
          Find a store
        </a>
        <FaMapMarkerAlt />
      </div>
    </div>
  );
};

export default PromotionsBanner;
