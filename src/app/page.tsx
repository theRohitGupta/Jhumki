import DetailsDescriptionList from "./components/common/DetailsShow";
import ShowImage from "./components/common/ImageShow";
import IconDescriptionList from "./components/common/LogoShow";
import TitleBar from "./components/common/TitleBar";
import Navbar from "./components/core/navbar/Navbar";
import SwiperComponent from "./components/core/swiper/SwiperComponent";
import { bannerSwiperComponentProps } from "./data/banners";
import {
  categorySwiperComponentProps,
  categoryTitleData,
} from "./data/category";
import {
  dealsOfTheWeekSwiperComponentProps,
  dealsOfTheWeekTitleData,
  newArrivalsTitleData,
  trendingTitleData,
} from "./data/dealsOftheWeek";
import {
  aboutJumkeyTitleData,
  categoriesTitleData,
  iconDescriptionData,
  indiaLargestTitleData,
  infoDescriptionData,
  registeredAddressTitleData,
  trendingSearchesTitleData,
} from "./data/footerData";
import { imageShow1Data, imageShow2Data } from "./data/imageShowData";
import { reviewData, reviewSwiperComponentProps, reviewTitleData } from "./data/reviewData";

export default function Home() {
  return (
    <div className=" w-full  mx-auto font-mulish">
      <Navbar />

      <div className="my-10 px-6 flex flex-col gap-20 max-w-[1440px] mx-auto">
        {/* BANNERS */}
        <div>
          <SwiperComponent {...bannerSwiperComponentProps} />
        </div>

        {/* IMAGE SHOW */}
        <div>
          <ShowImage {...imageShow1Data} />
        </div>

        {/* IMAGE SHOW */}
        <div>
          <ShowImage {...imageShow2Data} />
        </div>

        {/* DEALS OF THE WEEK */}
        <div>
          <TitleBar {...dealsOfTheWeekTitleData} />
          <SwiperComponent {...dealsOfTheWeekSwiperComponentProps} />
        </div>

        {/* CATEGORY */}
        <div>
          <TitleBar {...categoryTitleData} />
          <SwiperComponent {...categorySwiperComponentProps} />
        </div>

        {/* NEW ARRIVALS */}
        <div>
          <TitleBar {...newArrivalsTitleData} />
          <SwiperComponent {...dealsOfTheWeekSwiperComponentProps} />
        </div>

        {/* TRENDING PRODUCTS */}
        <div>
          <TitleBar {...trendingTitleData} />
          <SwiperComponent {...dealsOfTheWeekSwiperComponentProps} />
        </div>
      </div>
      {/* FOOTER */}
      <div className="bg-[#FAFAFA] py-8">
        <div className=" flex flex-col gap-16 w-3/4 mx-auto">
          <IconDescriptionList {...iconDescriptionData} />
          <DetailsDescriptionList {...infoDescriptionData} />
          <TitleBar {...registeredAddressTitleData} />
          <TitleBar {...trendingSearchesTitleData} />
          <TitleBar {...aboutJumkeyTitleData} />
          <TitleBar {...indiaLargestTitleData} />
          <TitleBar {...categoriesTitleData} />
        </div>
      </div>
    </div>
  );
}
