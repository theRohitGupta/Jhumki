import CustomButton from "../components/common/CustomBtn";
import {
    Images,
    SwiperComponentProps,
    SwiperSlideCustomProps,
    TitleBarProps,
  } from "../types/types";

  export const categoryTitleData : TitleBarProps  = {
    title : "Shop By Category",
    btn : <CustomButton text="View All"/>
}
  
  export const categoryData: Images[] = [
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/earrings_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/necklace_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/necklace_sets_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/bangles_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/anklets_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/toe_rings_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/maangtika_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/mangalsutra_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/finger_rings_creative_image.jpg"] },
    { src: ["https://cdn.picpil.com/fit-in/400x400/banners/2023/04/116/Bracelete_Category_Image.jpg"] },
  ];
  
  
  export const categorySlideData: SwiperSlideCustomProps = {
    images: categoryData,
    width: 400,
    height: 400,
    alt: "category",
  };
  
  export const categorySwiperComponentProps: SwiperComponentProps = {
    swiperSlideData: categorySlideData,
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    scrollbar : true,
    mousewheel : true,
    keyboard : true,
    cssMode : true
  };
  