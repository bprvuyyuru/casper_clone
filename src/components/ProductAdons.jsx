import React from "react";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const ProductAddons = ({ addonsData }) => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-[#1E306E] text-center mb-6">
        Elevate your sleep game
      </h2>

      {/* Swiper for mobile */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} // To show a bit of the next slide
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {addonsData.map((addon) => (
            <SwiperSlide key={addon.id}>
              <div className="text-left p-4 cursor-pointer hover:shadow-md">
                <img
                  src={addon.image}
                  alt={addon.name}
                  className="mb-4 w-full h-48 object-cover"
                />
                <div className="flex text-[#E7711B] mb-4">
                  {[...Array(Math.round(addon.rating))].map((_, i) => (
                    <IoMdStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <h3 className="text-sm font-semibold mb-4 text-[#1E306E]">
                  {addon.name}
                </h3>
                <div className="text-sm font-normal mb-2">
                  From <span className="text-[#1f7426]">${addon.price}</span>
                </div>
                <p className="text-sm text-gray-600">{addon.sizes}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for tablets and desktops */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {addonsData.map((addon) => (
          <div
            key={addon.id}
            className="text-left p-4 cursor-pointer hover:shadow-md"
          >
            <img
              src={addon.image}
              alt={addon.name}
              className="mb-4 w-full h-48 object-cover"
            />
            <div className="flex text-[#E7711B] mb-4">
              {[...Array(Math.round(addon.rating))].map((_, i) => (
                <IoMdStar key={i} className="w-5 h-5" />
              ))}
            </div>
            <h3 className="text-sm font-semibold mb-4 text-[#1E306E]">
              {addon.name}
            </h3>
            <div className="text-sm font-normal mb-2">
              From <span className="text-[#1f7426]">${addon.price}</span>
            </div>
            <p className="text-sm text-gray-600">{addon.sizes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAddons;
