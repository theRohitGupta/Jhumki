import React from 'react';
import { DetailsDescriptionListProps } from '@/app/types/types';

const DetailsDescriptionList: React.FC<DetailsDescriptionListProps> = ({ data }) => {
  return (
    <div className={`flex justify-between`}>
      {data.map((infoGroup, groupIndex) => (
        <div key={groupIndex} className={`flex ${groupIndex === 1 ? "flex-col gap-3": "gap-12"}`}>
          {infoGroup.map((item, itemIndex) => (
            <div key={itemIndex} className={`flex flex-col gap-1 w-40`}>
              {item.title && <h2 className='text-base font-bold'>{item.title}</h2>}
              <div className=' flex items-center gap-2'>
                {item.icons && (
                    <div className={` flex flex-row gap-4`}>
                    {item.icons.map((icon, iconIndex) => (
                        <div key={iconIndex}>{icon}</div>
                    ))}
                    </div>
                )}
                {item.description && (
                    <div className={` flex flex-col gap-2 text-[#666666] text-sm`}>
                    {item.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                    ))}
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DetailsDescriptionList;
