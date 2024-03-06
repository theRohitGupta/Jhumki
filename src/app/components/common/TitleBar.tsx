import { TitleBarProps } from '@/app/types/types';
import React from 'react';

const TitleBar: React.FC<TitleBarProps> = ({ title, subTitle, extraInfo, btn }) => {
  return (
    <div className="flex justify-between items-center">
      <div className='flex flex-col'>
        {title && <h2>{title}</h2>}
        {subTitle && <p>{subTitle}</p>}
        {extraInfo && <div>{extraInfo}</div>}
      </div>
      {btn && <div>{btn}</div>}
    </div>
  );
};

export default TitleBar;
