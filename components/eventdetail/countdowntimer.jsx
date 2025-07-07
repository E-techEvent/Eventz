import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initial state matches the screenshot (7 days, 11 hours, 21 minutes, 12 seconds)
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(11);
  const [minutes, setMinutes] = useState(21);
  const [seconds, setSeconds] = useState(12);

  useEffect(() => {
    // Create an interval that runs every second
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdown);
  }, [days, hours, minutes, seconds]); // Dependencies to ensure the effect runs when any time unit changes

  // Format numbers to always have two digits
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mt-6 p-6 rounded-lg shadow-xl text-center font-headerFont">
      <h2 className="text-white text-2xl font-bold mb-6">EVENT COUNTDOWN</h2>
      <div className="flex justify-around items-center gap-3 sm:gap-4">
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="bg-white text-gray-900 font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl p-3 sm:p-4 rounded-lg w-full aspect-square flex items-center justify-center">
            {formatNumber(days)}
          </div>
          <p className="text-gray-900 text-xs sm:text-sm mt-2 uppercase tracking-wider">DAYS</p>
        </div>
        
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="bg-white text-gray-900 font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl p-3 sm:p-4 rounded-lg w-full aspect-square flex items-center justify-center">
            {formatNumber(hours)}
          </div>
          <p className="text-gray-900 text-xs sm:text-sm mt-2 uppercase tracking-wider">HRS</p>
        </div>
        
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="bg-white text-gray-900 font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl p-3 sm:p-4 rounded-lg w-full aspect-square flex items-center justify-center">
            {formatNumber(minutes)}
          </div>
          <p className="text-gray-900 text-xs sm:text-sm mt-2 uppercase tracking-wider">MIN</p>
        </div>
        
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="bg-white text-gray-900 font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl p-3 sm:p-4 rounded-lg w-full aspect-square flex items-center justify-center">
            {formatNumber(seconds)}
          </div>
          <p className="text-gray-900 text-xs sm:text-sm mt-2 uppercase tracking-wider">SEC</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
