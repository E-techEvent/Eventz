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
    <div className="bg-indigo-400 mt-10 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center">
      <h2 className="text-white text-xl font-semibold mb-4">EVENT COUNTDOWN</h2>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 text-white font-bold text-3xl p-4 rounded w-20 h-20 flex items-center justify-center">
            {formatNumber(days)}
          </div>
          <p className="text-white text-xs mt-2">DAYS</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 text-white font-bold text-3xl p-4 rounded w-20 h-20 flex items-center justify-center">
            {formatNumber(hours)}
          </div>
          <p className="text-white text-xs mt-2">HOURS</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 text-white font-bold text-3xl p-4 rounded w-20 h-20 flex items-center justify-center">
            {formatNumber(minutes)}
          </div>
          <p className="text-white text-xs mt-2">MINUTES</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 text-white font-bold text-3xl p-4 rounded w-20 h-20 flex items-center justify-center">
            {formatNumber(seconds)}
          </div>
          <p className="text-white text-xs mt-2">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;