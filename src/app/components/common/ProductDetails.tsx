import { ProductDetailsType } from '@/app/types/types';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductDetails: React.FC<ProductDetailsType> = ({
  rating,
  title,
  tags,
  description,
  btn,
  discountedPrice,
  MRP,
  discountPercentage,
}) => {
  return (
    <div className="relative">
      {rating && (
        <div className="absolute -top-10 right-2 bg-white p-1 flex items-center text-black">
          <FaStar className="h-4 w-4 text-[#0D9488] mr-1" />
          <span className=' font-semibold text-sm'>{rating}</span>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}

        {tags && (
          <div className="mb-2">
            Tags: {tags.map((tag, idx) => (
              <span key={idx} className="mr-2">
                {tag}
              </span>
            ))}
          </div>
        )}

        {description && <p className="text-black mb-4">{description}</p>}

        {btn && <div>{btn}</div>}

        {discountedPrice && MRP && discountPercentage && (
          <div className="flex items-center text-black">
            <span className="text-xl font-bold mr-2">
              Discounted Price: ₹{discountedPrice}
            </span>
            <span className="text-xl line-through">MRP: ₹{MRP}</span>
            <span className="text-xl ml-2">
              Discount: {discountPercentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
