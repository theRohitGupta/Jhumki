interface TimeType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const getTimeStamps = (endDate: string): TimeType => {
  const saleEndTime = new Date(endDate).getTime();

  const currentTime = new Date().getTime();

  const timeDifference = saleEndTime - currentTime;

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
export default getTimeStamps;
