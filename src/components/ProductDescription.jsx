import React from "react";

const ProductDescription = ({ productDescription, points }) => {
  return (
    <div className="mb-6 text-sm font-calibre leading-6 font-extralight text-gray-800">
      <p className="mb-4">{productDescription}</p>

      <ul className="list-disc list-inside space-y-2">
        {points.map((point, index) => (
          <li key={index} className="font-calibre">
            <span dangerouslySetInnerHTML={{ __html: point }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDescription;
