import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "./trendingevents.css"; 
import Img from "../../assets/images/event-img.jpg";
import {Link} from "react-router";

const TrendingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedEvents, setLikedEvents] = useState({});
  const [visibleEvents, setVisibleEvents] = useState(4);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
    {
      id: 2,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
    {
      id: 3,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
    {
      id: 4,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
    {
      id: 5,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
    {
      id: 6,
      title: "AFRICA BUSINESS FESTIVAL",
      tagline: "IS HERE",
      cta: "STAY TUNED",
      subtext: "for more updates",
      image: Img,
    },
  ];

  // Update visible events based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleEvents(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleEvents(3);
      } else if (window.innerWidth >= 640) {
        setVisibleEvents(2);
      } else {
        setVisibleEvents(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const toggleLike = (eventId) => {
    setLikedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  return (
    <div className="w-full max-w-[90%] rounded shadow mb-20 mt-10">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl md:text-4xl font-medium font-headerFont text-gray-700">
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
          className="flex h-[350px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleEvents)}%)`,
          }}
        >
          {events.map((event) => (
            <Link to={`/events/${event.id}`}
              key={event.id}
              className="w-[200px] h-[300px] flex-shrink-0 px-2"
              style={{ flex: `0 0 ${100 / visibleEvents}%` }}
            >
              <div className="relative rounded-lg overflow-hidden bg-primary font-textFont text-white">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="h-full inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <button 
                      onClick={() => toggleLike(event.id)}
                      className="text-white bg-transparent hover:text-blue-200"
                    >
                      <FaHeart 
                        className={`w-6 h-6 transition-colors duration-300 ${
                          likedEvents[event.id] ? 'text-red-500 fill-red-500' : 'text-white'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                      <span className="text-xs text-white font-headerFont font-bold">{event.title}</span>
                    </div>
                    <h3 className="text-xl font-bold font-textFont mb-2">{event.tagline}</h3>
                    <div className="bg-gray-600 font-textFont bg-opacity-70 text-white text-xs px-4 py-1 rounded-full">
                      {event.cta}{" "}
                      <span className="text-xs opacity-70 font-textFont">
                        {event.subtext}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingEvents;