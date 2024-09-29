import React from "react";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b space-y-3 md:space-y-4 p-3 md:p-5">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0">
        <div className="flex items-start space-x-3">
          <PiUserCircleCheckFill className="h-8 w-8 md:h-12 md:w-12 text-gray-400" />
          <div className="flex flex-col">
            <p className="text-sm md:text-lg font-medium">
              {review.user.displayName}
            </p>
            <p className="text-xs md:text-sm text-[#1E306E]">Verified Buyer</p>
          </div>
        </div>
        <span className="text-xs md:text-sm text-gray-500">
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex text-[#E7711B]">
          {Array.from({ length: review.score }, (_, i) => (
            <IoMdStar key={i} className="w-4 h-4 md:w-5 md:h-5" />
          ))}
        </div>
        <h3 className="text-sm md:text-lg font-semibold">{review.title}</h3>
      </div>

      <p className="text-xs md:text-sm text-gray-800">{review.content}</p>

      <div className="flex items-center justify-end space-x-4">
        <span className="text-xs md:text-sm text-gray-600">
          Was this review helpful?
        </span>
        <div className="flex space-x-2">
          <button className="flex items-center text-gray-600">
            <AiOutlineLike className="w-4 h-4" />
            <span className="text-xs md:text-sm ml-1">{review.votesUp}</span>
          </button>
          <button className="flex items-center text-gray-600">
            <AiOutlineDislike className="w-4 h-4" />
            <span className="text-xs md:text-sm ml-1">{review.votesDown}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
