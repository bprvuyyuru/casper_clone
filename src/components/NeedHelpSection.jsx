import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HelpNeedSection = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto text-center py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#1E306E] mb-8">{data.title}</h2>

      {/* Carousel for mobile (only for screens < md) */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-[60px]">
                <div className="mb-4">
                  <img
                    src={item.icon}
                    alt={`${item.heading} icon`}
                    className="h-20 w-20"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#1E306E] mb-2">
                  {item.heading}
                </h3>
                <p className="font-light mb-2 text-sm font-calibre leading-6 text-gray-700">
                  {item.description}
                </p>
                <a
                  href={item.linkUrl}
                  className="text-[#1E306E] font-extralight hover:underline"
                >
                  {item.linkText}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for desktop (only for screens >= md) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-[60px]"
          >
            <div className="mb-4">
              <img
                src={item.icon}
                alt={`${item.heading} icon`}
                className="h-20 w-20"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#1E306E] mb-2">
              {item.heading}
            </h3>
            <p className="font-light mb-2 text-sm font-calibre leading-6 text-gray-700">
              {item.description}
            </p>
            <a
              href={item.linkUrl}
              className="text-[#1E306E] font-extralight hover:underline"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpNeedSection;
