import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { BsHeart, BsCart } from "react-icons/bs";
import { MdSendToMobile } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { PiChatsCircleThin } from "react-icons/pi";
import CustomButton from "@/app/components/common/CustomBtn";

const IconsArray = [
  {
    icons: <BsHeart />,
  },
  {
    icons: <BsCart />,
  },
  {
    icons: <MdSendToMobile />,
  },
];

const Header: React.FC = () => {
  return (
    <header className="w-full mx-auto flex px-20 py-2 border-b border-gray-300 flex-col gap-y-5">
      <div className="w-full flex justify-between items-center">
        <div className="w-32">
          <img
            src="https://cdn.picpil.com/logos/2022/08/217/logo.png"
            alt="jumkey logo"
            className="w-full object-cover"
          />
        </div>
        <div className="relative w-3/4">
          <input
            type="search"
            id="default-search"
            className="w-full p-2 text-sm border-gray-300 rounded focus:border-[#0D9488] border-2 outline-none"
            placeholder="What are you looking for?"
            required
          />
          <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
            <RiSearchLine />
          </div>
        </div>
        <div className="flex justify-evenly items-center text-2xl text-[#0D9488] gap-7">
          {IconsArray.map((icon, index) => {
            return (
              <span key={index} className="cursor-pointer">
                {icon.icons}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <HeaderDropDown btnName="New Arrivals" isArrow={true} />
          <HeaderDropDown btnName="Best Seller" isArrow={true} />
          <HeaderDropDown btnName="Categories" isArrow={true} />
          <HeaderDropDown btnName="Happy Customers" />
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn.picpil.com/fit-in/100x100/logos/2022/09/256/india.png"
            alt="india"
            className="w-4 h-4 rounded-full object-cover"
          />

          <ol className="flex justify-between gap-4 text-sm">
            <li className="border-r border-gray-700 pr-2">India</li>
            <li className="border-r border-gray-700 pr-2">English</li>
            <li>INR (₹)</li>
          </ol>

          <CustomButton
            text="CHAT NOW"
            icon={<PiChatsCircleThin className="text-lg" />}
            style="bg-[#26a69a] hover:bg-[#467771] text-white py-2 px-3 flex items-center gap-2 text-xs rounded-md"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;

interface PropsType {
  btnName: string;
  isArrow?: boolean;
}
export const HeaderDropDown: React.FC<PropsType> = ({
  btnName,
  isArrow = false,
}) => {
  return (
    <button className="hover:bg-gray-100 py-2 px-3 flex items-center gap-2 text-sm">
      {btnName}
      {isArrow && <FaChevronDown className="text-gray" />}
    </button>
  );
};
