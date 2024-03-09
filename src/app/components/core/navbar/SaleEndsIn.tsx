'use client'
import { CountdownBoxProps, SaleEndsInProps } from '@/app/types/types';
import React, { useState, useEffect } from 'react';

const CountdownBox: React.FC<CountdownBoxProps> = ({ label, value }) => (
  <div className="flex flex-row items-center gap-1">
    <span className="bg-[#CCFBF1] p-0.5 rounded-md text-black text-xs font-bold">{value < 10 ? `0${value}` : value}</span>
    <span className="countdown-label">{label}</span>
  </div>
);

const SaleEndsIn: React.FC<SaleEndsInProps> = ({ endDate, outputFormat }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const saleEndTime = new Date(endDate).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = saleEndTime - currentTime;
  
    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };  

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (Object.values(timeLeft).some(value => isNaN(value) || value === undefined)) {
    return null;
  }

  if (outputFormat === 'text') {
    return (
      <div>
        {timeLeft.hours} Hrs : {timeLeft.minutes} Min : {timeLeft.seconds} Sec
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <span>Sale Ends in </span>
      <CountdownBox label="Day" value={timeLeft.days} />
      <CountdownBox label="Hrs" value={timeLeft.hours} />
      <CountdownBox label="Min" value={timeLeft.minutes} />
      <CountdownBox label="Sec" value={timeLeft.seconds} />
    </div>
  );
};

export default SaleEndsIn;
