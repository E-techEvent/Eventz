import React, { useState } from "react";
import Eventcard from "components/events/eventcard";
import Header from "components/events/header";
import TrendingEvents from "components/events/trendingevents";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Standard Pass",
      category: "FINANCE",
    },
    {
      id: 2,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Access Elite Pass",
      category: "FINANCE",
    },
    {
      id: 3,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Standard Pass",
      category: "TECH",
    },
    {
      id: 4,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Standard Pass",
      category: "TECH",
    },
    {
      id: 5,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Access Elite Pass",
      category: "FINANCE",
    },
    {
      id: 6,
      title: "Africa Business Festival",
      date: "August 25, 2025",
      time: "9:00am GMT",
      price: "$500.00",
      pass: "Standard Pass",
      category: "TECH",
    },
  ];
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Sample event data

  // Filter events based on active filter
  const filteredEvents =
    activeFilter === "ALL"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <div className="flex flex-col items-center  mx-auto bg-white mb-20">
      <Header />
      <TrendingEvents />
      {/* Filter tabs */}

      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-1 rounded ${
            activeFilter === "ALL"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterClick("ALL")}
        >
          ALL
        </button>
        <button
          className={`px-4 py-1 rounded ${
            activeFilter === "FINANCE"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterClick("FINANCE")}
        >
          FINANCE
        </button>
        <button
          className={`px-4 py-1 rounded ${
            activeFilter === "TECH"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleFilterClick("TECH")}
        >
          TECH
        </button>
      </div>

      {/* Event cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%]">
        {filteredEvents.map((event) => (
          <Eventcard event={event} key={event.id} />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-between w-full mt-4">
        <button className="bg-gray-200 rounded-full p-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 12H5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className="bg-gray-200 rounded-full p-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
