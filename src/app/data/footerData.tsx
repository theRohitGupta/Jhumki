import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { TitleBarProps } from "../types/types";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const iconDescriptionData = [
  { image: 'https://cdn.picpil.com/fit-in/400x400/icons/2022/06/165/return-box_(1)_1.png', title: 'Free 7 days returns for all domestic orders' },
  { image: 'https://cdn.picpil.com/icons/2022/06/166/cod.png', title: 'Cash on delivery available on all orders' },
  { image: 'https://cdn.picpil.com/fit-in/100x100/icons/2022/06/165/quality_1.png', title: '100% verified and quality checked products' },
  { image: 'https://cdn.picpil.com/fit-in/400x400/icons/2022/06/165/customer-service_1.png', title: 'Personal manager to assist your queries' },
];

export const infoDescriptionData = [
  { title: 'About Us', description : ['Contact us', 'Happy customers', 'Franchise Enquiry'] },
  { title: 'Privacy policy', description : ['Terms & conditions', 'Return & refund policy' ,'International Policy'] },
  { title: 'Help Corner', description : [`Help & FAQs`, `Order tracking`] },
  { title: 'Contact Number', description : ['9902631591'],icons: [<MdOutlinePhoneInTalk key={0}/>] },
  { title: 'Follow Us', icons: [<FiFacebook key={0} className=" text-[#6366F1]" />, <FiTwitter key={1} className=" text-[#3B82F6]" />, <FiYoutube key={3} className=" text-[#EF4444]" />, <FiInstagram key={4} className=" text-[#EC4899]" /> ] },
];

export const registeredAddressTitleData : TitleBarProps  = {
    title : "Registered Address",
    subTitle : "Ninjaas Labs Private Limited, 608, RKR ARCADE, 5th Main Rd, opposite ITSY BITSY, B Channasandra, OMBR Layout, Kasturi Nagar, Bengaluru, Karnataka, India, 560043",
    extraInfo : <p>GSTIN : <span>29AAECN7662E1Z7</span> CIN : <span>U72200KA2014PTC076731</span></p>
  }

export const trendingSearchesTitleData : TitleBarProps  = {
    title : "Trending Searches",
    subTitle : "Antique Jewellery | Kemp Stone Jewellery | Terracotta Jewellery | Bridal Jewellery | American Diamond Jewellery | Temple Jewellery | Artificial Pearl Jewellery | Artificial Ruby Stone Jewellery | Wedding Jewellery |",
  }
export const categoriesTitleData : TitleBarProps  = {
    title : "Categories",
    subTitle : "Anklet | Bangle | Haath Phool | Earring | Mangalsutra | Maang Tikka | Toe Ring | Necklace | Bracelet | Finger Ring | Pendant | Jewellery Set | Waist Belt | Saree Pin |",
  }
export const indiaLargestTitleData : TitleBarProps  = {
    title : "India's Largest Fashion Jewellery Store",
    subTitle : "Online Megastore for Fashion Jewellery in India. Jhumkas, Earrings, Necklaces, Bracelets, Anklets, Chains and much more. Fusion, Tribal, Contemporary, Oxidised German Silver, Silk Thread, Terracotta and large collections available.",
  }
export const aboutJumkeyTitleData : TitleBarProps  = {
    title : "About Jumkey",
    subTitle : "Online Megastore for Fashion Jewellery in India. Jhumkas, Earrings, Necklaces, Bracelets, Anklets, Chains and much more. Fusion, Tribal, Contemporary, Oxidised German Silver, Silk Thread, Terracotta and large collections available.",
  }