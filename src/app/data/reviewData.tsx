import CustomButton from "../components/common/CustomBtn";
import { Images, ProductDetailsType, SwiperComponentProps, SwiperSlideCustomProps, TitleBarProps } from "../types/types";

export const reviewTitleData : TitleBarProps  = {
    title : "Happy Customers",
    subTitle : "What our customers say about us",
    btn : <CustomButton text="View All"/>
  }

  export const Review1Details : ProductDetailsType = {
    title: "Aparna",
    description: "Hi there, wore this today for a temple visit. Love this set 😍",
    btn: <CustomButton text="View Product"/>
  }

  export const Review2Details : ProductDetailsType = {
    title: "Sunitha",
    description: "I liked it ….got lot of compliments….little difficult to manage Becoz of layers",
    btn: <CustomButton text="View Product"/>
  }

  export const Review3Details : ProductDetailsType = {
    title: "Sarika",
    description: "Thank you for the beautiful jewellery set",
    btn: <CustomButton text="View Product"/>
  }

  export const Review4Details : ProductDetailsType = {
    title: "Bhuvi",
    description: "Thank you for this beautiful haram. Just loved it!",
    btn: <CustomButton text="View Product"/>
  }

  export const Review5Details : ProductDetailsType = {
    title: "Likith",
    description: "Very nice! Excellent mam. Im really very happy.",
    btn: <CustomButton text="View Product"/>
  }

  export const Review6Details : ProductDetailsType = {
    title: "Bharati",
    description: "Loved this thank u",
    btn: <CustomButton text="View Product"/>
  }

  export const reviewData: Images[] = [
    {
      src: ["https://cdn.picpil.com/assets/2024/01/29/ec5c740c1ebc4a0aaf4b26e2e6d30ce4.jpg", "https://cdn.picpil.com/assets/2024/01/29/e5e55c2eb3a44a0ebf905e92b816364d.jpg"],
      data: Review1Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/228e0982e33147edb1ce87139872db86.jpg", "https://cdn.picpil.com/assets/2023/12/362/f92103d07d5248078b33f77be5c8249d.jpg"],
      data: Review2Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1b9041d3f0114fb18d770faee5a4ea3d.jpg"],
      data: Review3Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/7c6dd9709ea2459f8306b7bff5590fd4.jpg"],
      data: Review4Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1526e1bfa182422294c40a56e26cca25.jpg", "https://cdn.picpil.com/assets/2023/12/362/1526e1bfa182422294c40a56e26cca25.jpg"],
      data: Review5Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1d70bf2460b54b399ba9a692c60fac39.jpg"],
      data: Review6Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/228e0982e33147edb1ce87139872db86.jpg", "https://cdn.picpil.com/assets/2023/12/362/f92103d07d5248078b33f77be5c8249d.jpg"],
      data: Review2Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1526e1bfa182422294c40a56e26cca25.jpg", "https://cdn.picpil.com/assets/2023/12/362/1526e1bfa182422294c40a56e26cca25.jpg"],
      data: Review5Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1b9041d3f0114fb18d770faee5a4ea3d.jpg"],
      data: Review3Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/1d70bf2460b54b399ba9a692c60fac39.jpg"],
      data: Review6Details,
    },
    {
      src: ["https://cdn.picpil.com/assets/2023/12/362/7c6dd9709ea2459f8306b7bff5590fd4.jpg"],
      data: Review4Details,
    },
  ];

  export const reviewSlideData: SwiperSlideCustomProps = {
    images: reviewData,
    width: 540,
    height: 720,
    style: 'w-[300px] h-[300px] object-contain bg-[#FAFAFA]',
    alt: "Review",
  };
  
  export const reviewSwiperComponentProps: SwiperComponentProps = {
    swiperSlideData: reviewSlideData,
    slidesPerView: 4.5,
    spaceBetween: 16,
    freeMode: true,
    scrollbar : true,
    mousewheel : true,
    keyboard : true,
    cssMode : true
  };