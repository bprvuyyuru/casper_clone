import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Pagination } from "swiper";

const ProductImageGallery = ({
  mainImage,
  details,
  subImages,
  productVideo,
  videoTxt,
}) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Image and Details for Tablet/Desktop Only */}
      <div className="hidden sm:block">
        {/* Main Image for Tablet/Desktop */}
        <div className="mb-6">
          <img
            src={mainImage}
            alt={details.heading}
            className="w-full shadow-lg"
          />
        </div>

        <div className="text-center mb-6 text-[#1E306E] grid gap-5">
          <div className="bg-gray-100 p-4">
            <p className="text-lg font-semibold">{details.heading}</p>
          </div>
          <div className="flex gap-3 p-5 bg-gray-100 text-sm font-calibre leading-6 font-light">
            <div className="flex flex-col items-center space-x-4 gap-2">
              <img src={details.desHeading} className="w-[14vw]" />
              <p>{details.description}</p>
            </div>
            <hr className="border-l h-[120px] border-gray-200" />
            <div className="flex flex-col items-center space-x-4 gap-2">
              <img src={details.desHeading2} className="w-[7vw]" />
              <p>{details.description2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel for Mobile Only */}
      <div className="block sm:hidden w-[90vw]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {/* Include the mainImage in the Swiper carousel */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src={mainImage}
                alt="Main Image"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </SwiperSlide>
          {subImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
          {productVideo && (
            <SwiperSlide>
              <div className="flex flex-col items-center w-full h-64 object-cover object-center">
                <p className="absolute top-4 p-4 text-[#1E306E] text-lg w-[60vw] font-semibold">
                  {videoTxt}
                </p>
                <video autoPlay loop>
                  <source src={productVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Sub Images Grid for Tablet/Desktop */}
      <div className="hidden sm:grid grid-cols-2 gap-6">
        {subImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img src={image.src} alt={image.alt} className="shadow-md" />
          </div>
        ))}
        {productVideo && (
          <div className="col-span-2 relative">
            <p className="absolute top-4 p-4 text-[#1E306E] text-2xl w-[30vw] font-semibold">
              {videoTxt}
            </p>
            <video autoPlay loop>
              <source src={productVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;
