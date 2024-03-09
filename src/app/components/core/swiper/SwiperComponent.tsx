"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Scrollbar,
} from "swiper/modules";

import SwiperSlideCustom from "./SwiperSlideCustom";
import { SwiperComponentProps } from "@/app/types/types";
import { SwiperModule } from "swiper/types";

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  swiperSlideData,
  navigation = false,
  autoplay = false,
  loop = false,
  slidesPerView = 1,
  spaceBetween = 0,
  freeMode = false,
  mousewheel = false,
  keyboard = false,
  cssMode = false,
  modules = [Autoplay, FreeMode, Mousewheel, Scrollbar, Keyboard, Navigation],
}) => {
  const swiperOptions = {
    navigation: navigation,
    loop: loop,
    autoplay: autoplay ? { delay: 2500, pauseOnMouseEnter: true } : false,
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    freeMode: freeMode,
    mousewheel: mousewheel,
    keyboard: keyboard,
    cssMode: cssMode,
    modules: modules as SwiperModule[],
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper">
        {swiperSlideData &&
          swiperSlideData.images.map((data, index) => (
            <SwiperSlide key={index}>
              <SwiperSlideCustom
                alt={`${swiperSlideData.alt + index}`}
                height={swiperSlideData.height}
                width={swiperSlideData.width}
                images={[data]}
                wishlist={swiperSlideData.wishlist}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
