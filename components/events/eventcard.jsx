import React from "react";

const Eventcard = ({ event }) => {
  return (
    <div
      key={event.id}
      className="border border-blue-300 rounded-lg overflow-hidden"
    >
      {/* Card banner image */}
      <div className="relative bg-purple-900 p-4">
        <div className="absolute top-2 right-2">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
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
      <div className="p-4 bg-white">
        <h3 className="text-center  text-slate-900 font-bold mb-2">
          {event.title}
        </h3>
        <p className="text-xs text-center text-slate-900  mb-2">
          {event.date} · {event.time}
        </p>
        <p className="text-center font-bold mb-2 text-slate-900 ">
          {event.price}
        </p>
        <p className="text-xs text-center mb-4 text-slate-900 ">{event.pass}</p>

        <button className="w-full bg-blue-800 text-white py-1 rounded text-sm cursor-pointer hover:bg-blue-500 transition duration-300">
          {event.pass.includes("Elite") ? "SIGN UP NOW" : "FIND OUT MORE"}
        </button>
      </div>
    </div>
  );
};

export default Eventcard;
