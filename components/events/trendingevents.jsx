import React, { useState } from "react";
import "./trendingevents.css"; // Import the CSS file for animations

const TrendingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
    {
      id: 2,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
    {
      id: 3,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
    {
      id: 4,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
    {
      id: 5,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
    {
      id: 6,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: "/api/placeholder/400/320",
    },
  ];

  const visibleEvents = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleEvents >= events.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - visibleEvents : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded shadow mb-20 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-700">
          Top trending events
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            <span className="sr-only">Previous</span>
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            <span className="sr-only">Next</span>
            &gt;
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleEvents)}%)`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="w-64 flex-shrink-0 px-2"
              style={{ flex: `0 0 ${100 / visibleEvents}%` }}
            >
              <div className="relative rounded-lg overflow-hidden bg-purple-900 text-white">
                <img
                  src={event.image}
                  alt={event.title}
                  className="opacity-20 w-full h-48 object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <button className="text-white bg-transparent hover:text-blue-200">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                      <span className="text-xs text-white">{event.title}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.tagline}</h3>
                    <div className="bg-gray-600 bg-opacity-70 text-white text-xs px-4 py-1 rounded-full">
                      {event.cta}{" "}
                      <span className="text-xs opacity-70">
                        {event.subtext}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingEvents;
