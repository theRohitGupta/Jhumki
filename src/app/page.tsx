import ShowImage from "./components/common/ImageShow";
import TitleBar from "./components/common/TitleBar";
import Navbar from "./components/core/navbar/Navbar";
import SwiperComponent from "./components/core/swiper/SwiperComponent";
import { bannerSwiperComponentProps } from "./data/banners";
import { categorySwiperComponentProps, categoryTitleData } from "./data/category";
import { dealsOfTheWeekSwiperComponentProps, dealsOfTheWeekTitleData, newArrivalsTitleData, trendingTitleData } from "./data/dealsOftheWeek";
import { imageShow1Data, imageShow2Data } from "./data/imageShowData";


export default function Home() {
  return (
    <div className=" w-full mx-auto">
        <Navbar/>

        <div className="my-10 mx-6">
          {/* BANNERS */}
          <SwiperComponent {...bannerSwiperComponentProps}/>

          {/* IMAGE SHOW */}
          <ShowImage {...imageShow1Data}/>

          {/* IMAGE SHOW */}
          <ShowImage {...imageShow2Data}/>

          {/* DEALS OF THE WEEK */}
          <div>
            <TitleBar {...dealsOfTheWeekTitleData}/>
            <SwiperComponent {...dealsOfTheWeekSwiperComponentProps}/>
          </div>

          {/* CATEGORY */}
          <div>
            <TitleBar {...categoryTitleData}/>
            <SwiperComponent {...categorySwiperComponentProps}/>
          </div>

          {/* NEW ARRIVALS */}
          <div>
            <TitleBar {...newArrivalsTitleData}/>
            <SwiperComponent {...dealsOfTheWeekSwiperComponentProps}/>
          </div>

          {/* TRENDING PRODUCTS */}
          <div>
            <TitleBar {...trendingTitleData}/>
            <SwiperComponent {...dealsOfTheWeekSwiperComponentProps}/>
          </div>

        </div>
    </div>
  );
}
