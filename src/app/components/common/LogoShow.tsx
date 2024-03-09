import { IconDescriptionListProps } from '@/app/types/types';
import Image from 'next/image';
import React from 'react';

const IconDescriptionList: React.FC<IconDescriptionListProps> = ({ style, data }) => {
  return (
    <div className={`${style ? " flex justify-between bg-white px-6 py-10 scale-110" :"flex gap-14"} `}>
      {data.map((item, index) => (
        <div key={index} className={`${style ? "w-48" :"flex flex-col gap-2"}`}>
            {item.image && <Image src={item.image} alt={`Icon ${index + 1}`} height={40} width={40} />}
            {item.title && <h2>{item.title}</h2>}
            <div className=' flex items-center gap-1'>
                {item.icons && 
                    <div className={`${style ? "py-3 flex flex-row gap-4" :"flex gap-6"} `}>
                        {
                            item.icons.map((ele) => (
                                ele
                            ))
                        }
                    </div>
                }
                {item.description && 
                    <div className={`${style ? "py-3 flex flex-col gap-2" :"flex gap-6"} `}>
                        {
                            item?.description.map((ele,i) => (
                                <p key={i}>{ele}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
      ))}
    </div>
  );
};

export default IconDescriptionList;
