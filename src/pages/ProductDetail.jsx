import React from "react";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductPurchaseCard from "../components/ProductPurchaseCard";
import productData from "../data/ProductDetail.json"; // Import the JSON data
import ProductDescription from "../components/ProductDescription";
import ChatWithUsCard from "../components/ChatWithUsCard";
import HeroBanner from "../components/HeroBanner";
import TabsSection from "../components/TabsSection";
import tabData from "../data/TabsContent.json";
import NeedHelpSection from "../components/NeedHelpSection";
import HelpNeed from "../data/HelpNeed.json";
import FAQSection from "../components/FAQSection";
import faqData from "../data/FAQ.json";
import CustomerReviews from "../components/CustomerReviews";
import ProductAddons from "../components/ProductAdons";
import addonsData from "../data/AddOns.json";

const ProductDetailPage = () => {
  const productId = "8488314044731";
  return (
    <>
      <div className="p-5 sm:p-10 bg-white min-h-screen flex flex-col sm:flex-row justify-center">
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="w-full sm:w-[50vw] hidden sm:block mb-8 flex justify-center">
            <ProductImageGallery
              mainImage={productData.mainImage}
              details={productData.details}
              subImages={productData.subImages}
              productVideo={productData.productVideo}
              videoTxt={productData.videoTxt}
            />
          </div>
          <div className="flex flex-col w-full sm:w-[30vw]">
            <ProductPurchaseCard
              productData={productData}
              rating={productData.rating}
              heading={productData.product.heading}
              sizeDetails={productData.product.sizeDetails}
            />
            <hr className="border-t border-gray-200 my-8" />
            <div>
              <ProductDescription
                productDescription={productData.description.productDescription}
                points={productData.description.points}
              />
            </div>
            <div>
              <ChatWithUsCard />
            </div>
          </div>
        </div>
      </div>
      {/* Additional Sections */}
      <div>
        <HeroBanner
          backgroundImage={productData.HeroSection.backgroundImg}
          text={productData.HeroSection.text}
        />
      </div>
      <div>
        <TabsSection propTab={tabData} />
      </div>
      <div>
        <NeedHelpSection data={HelpNeed} />
      </div>
      <div className="bg-[#F6F6F6]">
        <FAQSection data={faqData} />
      </div>
      <div>
        <CustomerReviews productId={productId} />
      </div>
      <div>
        <ProductAddons addonsData={addonsData} />
      </div>
    </>
  );
};

export default ProductDetailPage;
