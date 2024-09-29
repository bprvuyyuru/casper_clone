import React from "react";

const HeroBanner = ({ backgroundImage, text }) => {
  return (
    <div
      className="relative flex items-center justify-center h-64 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative font-calibre text-white text-2xl p-2 sm:text-4xl font-semibold text-center z-10">
        {text}
      </h1>
    </div>
  );
};

export default HeroBanner;
