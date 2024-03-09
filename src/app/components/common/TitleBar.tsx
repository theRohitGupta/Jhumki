import { TitleBarProps } from '@/app/types/types';
import React from 'react';

const TitleBar: React.FC<TitleBarProps> = ({ title, subTitle, extraInfo, btn }) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <div className='flex flex-col'>
        {title && <h2 className=' font-bold'>{title}</h2>}
        {subTitle && <p className=' text-[#666666] text-sm'>{subTitle}</p>}
        {extraInfo && <div className=' text-[#D63F3F]'>{extraInfo}</div>}
      </div>
      {btn && <div>{btn}</div>}
    </div>
  );
};

export default TitleBar;
