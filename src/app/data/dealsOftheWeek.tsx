import CustomButton from "../components/common/CustomBtn";
import SaleEndsIn from "../components/core/navbar/SaleEndsIn";
import { Images, ProductDetailsType, SwiperComponentProps, SwiperSlideCustomProps, TitleBarProps } from "../types/types";

export const dealsOfTheWeekTitleData : TitleBarProps  = {
    title : "Deals Of The Week",
    subTitle : "Sale ends in",
    extraInfo : <SaleEndsIn endDate="2024-03-06T23:59:59" outputFormat="text"/>,
    btn : <CustomButton text="View All"/>
}

export const newArrivalsTitleData : TitleBarProps  = {
  title : "New Arrivals",
  subTitle : "Just Arrived. Dont miss them!",
  btn : <CustomButton text="View All"/>
}

export const trendingTitleData : TitleBarProps  = {
  title : "Trending Products",
  subTitle : "Trending at the moment. Dont miss them!",
  btn : <CustomButton text="View All"/>
}

export const Product1Details : ProductDetailsType = {
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    title: "Geometric Design Beads Terracotta Choker Necklace Set",
    tags: ['best-seller','exclusive-deals'],
    discountedPrice: 1999,
    MRP: 4400,
    discountPercentage: 54 
}

export const Product2Details : ProductDetailsType = {
  rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
  title: "Parrot Design Terracotta Jewellery Set",
  tags: ['best-seller','exclusive-deals'],
  discountedPrice: 2599,
  MRP: 5600,
  discountPercentage: 53 
}

export const Product3Details : ProductDetailsType = {
  rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
  title: "Cylindrical Design Terracotta Jewellery Set",
  tags: ['best-seller','exclusive-deals'],
  discountedPrice: 2500,
  MRP: 4400,
  discountPercentage: 43 
}

export const Product4Details : ProductDetailsType = {
  rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
  title: "Kathakali Design Terracotta Jewellery Set",
  tags: ['best-seller','exclusive-deals'],
  discountedPrice: 2130,
  MRP: 4300,
  discountPercentage: 50 
}

export const dealsOfTheWeekData: Images[] = [
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2022/10/300/9f622456a60b4960b5f6d1847f59f6a4.jpg"],
    data: Product1Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2022/10/300/14baf2920c8949c183e0abf48b232484.jpg"],
    data: Product2Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2022/10/300/58a88cfdce7b47999659141920ec83d6.jpg"],
    data: Product3Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2023/05/131/8e4c224845ad44239aed0c4f21fe30a2.jpg"],
    data: Product4Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2023/07/208/a4ad6086d7e94495bc31327ce2b8aa4d.jpg"],
    data: Product1Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2024/01/03/712e8e07eb4b43f691c241aab1ff7226.jpg"],
    data: Product2Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2022/08/236/6a2d0c83e34546f9be82efcacc0081da.jpg"],
    data: Product3Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2020/8/25/383d2ab1e68c11eabd7f02cc4eb47ca4.jpg"],
    data: Product4Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2020/8/25/08ade6e0e69111eabd7f02cc4eb47ca4.jpg"],
    data: Product1Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2023/08/215/b71c787f49094bc39a0e342dfe459722.jpg"],
    data: Product2Details,
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2022/08/214/9a2fe52fc50a43669ad9255b1fc14044.jpg"],
    data: Product3Details
  },
  {
    src: ["https://cdn.picpil.com/fit-in/540x720/assets/2021/3/18/JPRL122-4.jpg"],
    data: Product4Details
  },
];

  export const dealsOfTheWeekSlideData: SwiperSlideCustomProps = {
    images: dealsOfTheWeekData,
    width: 540,
    height: 720,
    alt: "Banner",
    wishlist: true,
  };
  
  export const dealsOfTheWeekSwiperComponentProps: SwiperComponentProps = {
    swiperSlideData: dealsOfTheWeekSlideData,
    slidesPerView: 4.5,
    spaceBetween: 10,
    freeMode: true,
    scrollbar : true,
    mousewheel : true,
    keyboard : true,
    cssMode : true
  };
  