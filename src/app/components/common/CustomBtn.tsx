import { CustomButtonProps } from "@/app/types/types";
import React from "react";

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text,
  icon,
  style,
}) => (
  <button onClick={onClick} className={`text-[#CCFBF1] ${style}`}>
    {icon}
    {text}
  </button>
);

export default CustomButton;
