import React from 'react';
import { FaCalendar, FaShareAlt } from 'react-icons/fa';

const EventDetailSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto gap-4 p-4 mt-10 ">
      {/* Left side - Event banner */}
      <div className="relative rounded-lg overflow-hidden bg-purple-900 w-full md:w-3/5">
        <div className="absolute top-4 left-4">
          <div className="text-blue-400 text-sm font-bold">
            AFRICA
          </div>
          <div className="text-blue-400 text-sm font-bold">
            BUSINESS
          </div>
          <div className="text-blue-400 text-sm font-bold">
            FESTIVAL
          </div>
        </div>
        
        <div className="p-8 pt-20 pb-12 flex flex-col items-center justify-center">
          <div className="text-white text-6xl font-bold tracking-wider">
            AFRICA
          </div>
          <div className="text-fuchsia-500 text-4xl font-bold tracking-wider flex items-end">
            BUSINESS FESTIVAL
            <span className="text-blue-400 text-5xl ml-1">3</span>
          </div>
          
          <div className="mt-6 border-t border-fuchsia-500 w-3/4"></div>
          
          <div className="mt-6 text-white text-3xl font-bold space-x-4">
            <span>IS</span>
            <span>HERE</span>
          </div>
          
          <div className="mt-6 border border-yellow-500 rounded-full px-6 py-2 bg-opacity-10 bg-black">
            <div className="text-white font-bold text-xl">
              STAY TUNED
            </div>
            <div className="text-white text-sm text-center">
              for more updates!
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-8 top-16 w-8 h-8 bg-orange-500 rounded-full"></div>
        <div className="absolute left-16 bottom-16 w-6 h-6 bg-yellow-500 transform rotate-45"></div>
        <div className="absolute right-32 bottom-24 w-8 h-8 bg-green-500 transform rotate-12"></div>
        <div className="absolute left-0 top-0 w-16 h-16 bg-fuchsia-700 transform -rotate-12"></div>
      </div>
      
      {/* Right side - Event details */}
      <div className="w-full md:w-2/5 flex flex-col gap-4">
        {/* Buy Ticket Button */}
        <button className="bg-blue-900 text-white font-bold py-4 px-4 rounded-lg text-xl w-full">
          Buy Ticket
        </button>
        
        {/* Event Details Card */}
        <div className="bg-indigo-300 rounded-lg p-4 flex flex-col">
          <div className="bg-blue-900 text-white font-bold py-3 px-4 rounded-lg text-center text-xl mb-4">
            EVENT DETAILS
          </div>
          
          <div className="flex flex-col gap-2 text-center">
            <div>
              <span className="font-semibold">Date:</span> August 20, 2025 - Saturday
            </div>
            <div>
              <span className="font-semibold">Time:</span> 9:00am GMT
            </div>
            <div>
              <span className="font-semibold">Rate:</span> $500.00
            </div>
            <div>
              <span className="font-semibold">Venue:</span> Kempinski Hotel
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-center w-1/2">
            <FaShareAlt size={24} />
          </button>
          <button className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-center gap-2 w-1/2">
            <FaCalendar size={20} />
            <span>Add to calendar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailSection;