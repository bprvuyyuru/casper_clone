import React, { useState, useEffect } from "react";
import { fetchYotpoReviews } from "../services/reviewsService";
import ReviewCard from "./ReviewCard";
import { IoMdStar } from "react-icons/io";

const CustomerReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState({ averageRating: 0, totalReviews: 0 });

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchYotpoReviews(productId);
        setReviews(data.reviews);
        setSummary({
          averageRating: data.bottomline.averageScore,
          totalReviews: data.bottomline.totalReview,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadReviews();
  }, [productId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews: {error}</p>;

  return (
    <div className="bg-gray-50 rounded-lg p-4 md:p-5">
      <h1 className="text-center font-semibold p-3 md:p-5">Customer reviews</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
        <span className="text-4xl md:text-5xl font-semibold text-[#1E306E]">
          {summary.averageRating.toFixed(1)}
        </span>
        <div className="grid gap-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start text-[#D97706]">
            {Array.from({ length: summary.averageRating }, (_, i) => (
              <IoMdStar key={i} className="w-4 h-4 md:w-5 md:h-5" />
            ))}
          </div>
          <span className="text-xs md:text-sm text-black">
            Based on {summary.totalReviews} reviews
          </span>
        </div>
      </div>

      <div className="review-list space-y-4 md:space-y-6 py-4 md:py-6 px-2 md:px-[80px] lg:px-[120px]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
