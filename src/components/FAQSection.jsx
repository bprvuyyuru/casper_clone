import React, { useState } from "react";

const FAQSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-4 md:mx-[150px] py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E306E] mb-6 text-left">
        Frequently asked questions
      </h2>

      <div className="space-y-4 p-2 md:p-4">
        {data.map((faq, index) => (
          <div key={index} className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-base md:text-lg font-semibold text-[#1E306E] ${
                  activeIndex === index ? "ttext-[#1E306E]" : ""
                }`}
              >
                {faq.question}
              </h3>
              <span className="text-xl md:text-2xl">
                {activeIndex === index ? "✕" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="pr-4 pt-2 md:pt-4 text-gray-700 pb-2 md:pb-4 text-sm font-calibre leading-6 font-extraligh">
                <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
