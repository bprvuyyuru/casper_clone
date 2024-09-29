import React, { useState } from "react";

const TabsSection = ({ propTab }) => {
  const [activeTab, setActiveTab] = useState("getCozy");
  const tabs = propTab;

  const currentTab = tabs[activeTab];

  return (
    <div className="mx-4 p-4 lg:mx-[40px] lg:p-[50px]">
      {/* Tab Buttons */}
      <div className="flex justify-between lg:justify-start lg:space-x-8 mb-6">
        <button
          className={`pb-2 ${
            activeTab === "getCozy"
              ? "border-b-4 border-[#1E306E] font-semibold text-[#1E306E]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("getCozy")}
        >
          GET COZY
        </button>
        <button
          className={`pb-2 ${
            activeTab === "fallAsleep"
              ? "border-b-4 border-[#1E306E] font-semibold text-[#1E306E]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("fallAsleep")}
        >
          FALL ASLEEP
        </button>
        <button
          className={`pb-2 ${
            activeTab === "stayAsleep"
              ? "border-b-4 border-[#1E306E] font-semibold text-[#1E306E]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("stayAsleep")}
        >
          STAY ASLEEP
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
        <div className="lg:w-full mt-4 lg:mt-0 order-2 lg:order-1">
          <h2 className="text-xl lg:text-3xl font-semibold text-[#1E306E] mb-2">
            {currentTab.title}
          </h2>
          <h3 className="text-lg lg:text-2xl font-semibold text-[#1E306E] mb-2">
            {currentTab.subtitle}
          </h3>
          <p className="font-light text-sm mt-4">{currentTab.description}</p>
        </div>
        <div className="w-full lg:w-[90%] mx-auto mb-6 lg:mb-0 order-1 lg:order-2">
          <img
            src={currentTab.image}
            alt={currentTab.subtitle}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
