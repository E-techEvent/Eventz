import React from 'react';
import { FaCalendar, FaShareAlt } from 'react-icons/fa';
import Img from '../../assets/images/event-img.jpg';

const EventDetailSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto gap-4 p-4 mt-10 ">
      {/* Left side - Event banner */}
      <div className="relative rounded-lg overflow-hidden bg-purple-900 w-full md:w-3/5">
        <img
          src={Img}
          alt="Event banner"
          className="w-full h-full object-cover"
        />
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
              <span className="font-semibold font-textFont">Date:</span> August 20, 2025 - Saturday
            </div>
            <div>
              <span className="font-semibold font-textFont">Time:</span> 9:00am GMT
            </div>
            <div>
              <span className="font-semibold font-textFont">Rate:</span> $500.00
            </div>
            <div>
              <span className="font-semibold font-textFont">Venue:</span> Kempinski Hotel
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-center w-1/2 cursor-pointer hover:bg-primary-hover transition duration-300">
            <FaShareAlt size={24} />
          </button>
          <button className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-center gap-2 w-1/2 cursor-pointer hover:bg-primary-hover transition duration-300">
            <FaCalendar size={20} />
            <span className='font-textFont'>Add to calendar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailSection;