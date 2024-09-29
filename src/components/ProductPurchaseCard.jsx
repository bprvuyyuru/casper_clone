import { IoMdStar } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import affirmLogo from "../assets/affirm.png";

const ProductPurchaseCard = ({ rating, heading, sizeDetails }) => {
  const [selectedSize, setSelectedSize] = useState(sizeDetails[0]);

  const handleSizeChange = (e) => {
    const newSize = sizeDetails.find((size) => size.id === e.target.value);
    setSelectedSize(newSize);
  };

  const calculateDiscountedPrice = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
  };

  return (
    <div className="w-full sm:w-[30vw] font-calibre p-4">
      <div className="flex items-center mb-3">
        <div className="flex text-[#E7711B]">
          {[...Array(Math.round(rating))].map((_, i) => (
            <IoMdStar key={i} className="w-5 h-5" />
          ))}
        </div>
        <span className="ml-2 text-md font-semibold text-[#E7711B]">
          {rating}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#1E306E] mb-3">
        {heading}
      </h1>
      <div className="flex items-center space-x-2 py-3">
        <span className="text-lg sm:text-xl font-normal text-[#00706E] flex items-center">
          <FaDollarSign className="font-light" />
          {calculateDiscountedPrice(selectedSize.price, selectedSize.discount)}
        </span>
        {selectedSize.discount > 0 && (
          <>
            <span className="line-through text-lg sm:text-xl flex items-center">
              <FaDollarSign />
              {selectedSize.price.toFixed(2)}
            </span>
            <span className="bg-[#00706E] text-white text-xs font-semibold px-4 py-1.5 rounded-2xl">
              {selectedSize.discount}% OFF
            </span>
          </>
        )}
      </div>
      <div className="py-2 mb-5 text-xs font-light flex items-center space-x-1">
        <span className="mr-0.2">Starting at $106/mo with</span>{" "}
        <img src={affirmLogo} className="h-4 mb-1.5" />
        <a href="#" className="underline ml-1">
          Learn more
        </a>
      </div>

      {/* Size Selector */}
      <div className="mb-5">
        <label htmlFor="size-select" className="block font-light text-xs mb-5">
          Select your size
        </label>
        <select
          id="size-select"
          className="w-full p-4 border-2 border-gray-300 bg-gray-100 rounded-sm"
          value={selectedSize.id}
          onChange={handleSizeChange}
        >
          {sizeDetails.map((size) => (
            <option key={size.id} value={size.id}>
              {size.id}
            </option>
          ))}
        </select>
      </div>

      <button className="w-full bg-[#1E306E] text-white py-4 rounded-md font-normal hover:bg-blue-900 mb-4">
        Add to Cart
      </button>

      <div
        className={`flex items-center text-xs font-light ${
          selectedSize.inStock ? "text-[#00706E]" : "text-red-600"
        }`}
      >
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            selectedSize.inStock ? "bg-[#00706E]" : "bg-red-600"
          } mr-2`}
        ></span>
        <span>
          {selectedSize.inStock
            ? "In-stock, ships within 3-5 days | Free shipping & returns"
            : "Out of stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductPurchaseCard;
