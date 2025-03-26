import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router"

const Eventcard = ({ event }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      key={event.id}
      className="border border-blue-300 rounded-lg overflow-hidden"
    >
      {/* Card banner image */}
      <div className="relative bg-primary p-4" 
        style={{ 
          backgroundImage: `url(${event.image || 'https://via.placeholder.com/400x160'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-2 right-2">
          <FaHeart 
            onClick={handleLikeToggle}
            className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
              isLiked ? 'text-red-500' : 'text-white'
            }`}
          />
        </div>
        <div className="text-center">
          <div className="text-white text-2xl font-bold">
            AFRICA<span className="text-yellow-400">25</span>
          </div>
          <div className="text-white text-sm mt-2">IS HERE</div>
          <div className="bg-gray-800 text-white text-xs rounded-full px-4 py-1 mt-2 mx-auto inline-block">
            STAY TUNED
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 bg-white ">
        <h3 className="text-center font-headerFont text-2xl text-slate-900 font-bold mb-2">
          {event.title}
        </h3>
        <p className="text-md text-center font-textFont text-bold text-slate-900  mb-2">
          {event.date} · {event.time}
        </p>
        <p className="text-center font-textFont font-bold mb-2 text-slate-900 ">
          {event.price}
        </p>
        <p className="text-sm font-textFont text-center mb-4 text-slate-900 ">{event.pass}</p>


        <Link to={`/events/${event.id}`} >
          <button to={`/events/${event.id}`} className="w-full bg-primary font-textFont font-bold  text-white py-5 rounded text-md cursor-pointer hover:bg-blue-500 transition duration-300">
          {event.pass.includes("Elite") ? "SIGN UP NOW" : "FIND OUT MORE"}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Eventcard;