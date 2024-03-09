"use client";
import { CountdownBoxProps, SaleEndsInProps } from "@/app/types/types";
import getTimeStamps from "@/app/util/getTimeStamps";
import React, { useState, useEffect, useCallback, useMemo } from "react";
interface TimeType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ label, value }) => (
  <div className="flex flex-row items-center gap-1">
    <span className="bg-[#CCFBF1] p-0.5 rounded-md text-black text-xs font-bold">
      {value < 10 ? 0 + value.toPrecision() : value.toPrecision()}
    </span>
    <span className="countdown-label">{label}</span>
  </div>
);

const SaleEndsIn: React.FC<SaleEndsInProps> = ({ endDate, outputFormat }) => {
  const calculatedTime = useMemo(() => {
    return getTimeStamps(endDate);
  }, [endDate]);

  const [time, setTime] = useState<null | TimeType>(calculatedTime);

  const timeout = setTimeout(() => {
    calculatedTime;
  }, 1000);

  useEffect(() => {
    setTime(calculatedTime);
  }, [timeout, outputFormat, calculatedTime]);

  // Remove unnecessary undefined check
  if (
    time &&
    Object.values(time).some((value) => isNaN(value) || value === undefined)
  ) {
    return null;
  }
  // Handle different output formats
  if (outputFormat === "text") {
    return (
      <p>
        {time?.hours} Hrs : {time?.minutes} Min :{time?.seconds} Sec
      </p>
    );
  }
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <span>Sale Ends in </span>
      <CountdownBox label="Day" value={time?.days ? time?.days : 0} />
      <CountdownBox label="Hrs" value={time?.hours ? time?.hours : 0} />
      <CountdownBox label="Min" value={time?.minutes ? time?.minutes : 0} />
      <CountdownBox label="Sec" value={time?.seconds ? time?.seconds : 0} />
    </div>
  );
};

export default SaleEndsIn;
