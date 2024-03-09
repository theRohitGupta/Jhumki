import { IconDescriptionListProps } from '@/app/types/types';
import Image from 'next/image';
import React from 'react';

const IconDescriptionList: React.FC<IconDescriptionListProps> = ({ data }) => {
  return (
    <div className={`flex gap-14 `}>
      {data.map((item, index) => (
        <div key={index} className={`flex flex-col gap-3 w-60 justify-between`}>
            {item.image && <Image src={item.image} alt={`Icon ${index + 1}`} height={45} width={45} />}
            {item.title && <h2 className='font-semibold text-sm'>{item.title}</h2>}
        </div>
      ))}
    </div>
  );
};

export default IconDescriptionList;
