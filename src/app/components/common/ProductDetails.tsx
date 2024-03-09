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
        <div className="absolute -top-8 right-4 bg-white px-1 py-[0.5] flex items-center text-black">
          <FaStar className="h-4 w-4 text-[#0D9488] mr-1" />
          <span className=' font-bold text-sm'>{rating.toFixed(1)}</span>
        </div>
      )}
      <div className="flex flex-col gap-2 justify-between h-32 p-2">
        {title && <h2 className="text-sm font-semibold">{title}</h2>}

        {tags && (
          <div className="text-sm flex gap-2 text-[#666666]">
            {tags.map((tag, idx) => (
              <span key={idx} className="">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {description && <p className=" text-sm text-[#666666]">{description}</p>}

        {btn && <div>{btn}</div>}

        {discountedPrice && MRP && discountPercentage && (
          <div className="flex items-center text-black gap-2">
            <span className="font-semibold text-lg">
              ₹{discountedPrice}
            </span>
            <span className="text-base font-extralight line-through text-[#666666]">₹{MRP}</span>
            <span className="text-base text-[#2E7D32]">
              {discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
