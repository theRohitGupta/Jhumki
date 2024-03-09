"use client";
import { SwiperSlideCustomProps } from "@/app/types/types";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowImage from "../../common/ImageShow";
import ProductDetails from "../../common/ProductDetails";
import { FaRegHeart } from "react-icons/fa";

const SwiperSlideCustom: React.FC<SwiperSlideCustomProps> = ({
  images,
  width,
  height,
  alt,
  wishlist
}) => {
  return (
    <>
      {Array.isArray(images) && images.length &&
        images.map((imageObject, index) => 
        (
          <div className="relative" key={index}>
            {Array.isArray(imageObject.src) && imageObject.src.length > 1 ? (
              <>
                <Swiper
                  slidesPerView={1}
                  navigation
                  modules={[Navigation]}
                  className="w-3/4 mx-auto mySwiper"
                >
                  {imageObject.src.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="flex gap-2">
                        <ShowImage
                          src={image}
                          width={width}
                          height={height}
                          alt={`${alt} ${idx + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {imageObject.data && <ProductDetails {...imageObject.data}/>}
              </>
            ) : (
              <div>
                {imageObject.src.map((imag, index) => (
                  <div key={index}>
                    <ShowImage
                      src={imag}
                      width={width}
                      height={height}
                      alt={alt}
                    />
                    {wishlist && (
                      <div className="absolute rounded-full p-2 top-2 right-2 hover:bg-black hover:bg-opacity-10 transition-all duration-100">
                        <FaRegHeart className="h-6 w-6 text-white font-bold" />
                      </div>
                    )}
                    <ProductDetails {...imageObject.data}/>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default SwiperSlideCustom;
