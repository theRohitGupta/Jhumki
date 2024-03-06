import { CustomButtonProps } from '@/app/types/types';
import React from 'react';

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="text-[#CCFBF1]"
  >
    {text}
  </button>
);

export default CustomButton;
