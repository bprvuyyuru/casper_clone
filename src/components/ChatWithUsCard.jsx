import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const ChatWithUsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-[#1E306E] mb-4">
        Got questions?
      </h2>
      <p className="mb-6 font-light text-sm font-calibre leading-6">
        Speak with our award-winning customer service or book a virtual
        appointment with a Sleep Specialist from our stores.
      </p>
      <div className="flex items-center justify-center border-t pt-4">
        <img
          src="https://casper-ca.b-cdn.net/cx_82c8eacfee.svg"
          className="mr-4 w-9"
        />
        <button className="text-[#1E306E] font-semibold text-sm">
          Chat with Us
        </button>
      </div>
    </div>
  );
};

export default ChatWithUsCard;
