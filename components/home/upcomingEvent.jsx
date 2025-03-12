import img from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    day: '27',
    month: 'JAN',
    year: '2025',
    type: 'FINANCE',
    title: 'William Smith Comedy Show',
    description: 'Crack & Smile - 2025 Tour',
    time: '7:00 PM',
    image: img,
  },
  {
    id: 2,
    day: '28',
    month: 'JAN',
    year: '2025',
    type: 'TECH',
    title: 'Shannon Weigel Acoustic Night',
    description: 'Tour: Love Me As I Love You',
    time: '8:30 PM',
    image: img2,
  },
  {
    id: 3,
    day: '29',
    month: 'JAN',
    year: '2025',
    type: 'BUSINESS',
    title: 'The Lewistage Hamlet by William Shakespeare',
    description: 'The Lewistage Theatre Drama Group',
    time: '8:00 PM',
    image: img3,
  },
  {
    id: 4,
    day: '30',
    month: 'JAN',
    year: '2025',
    type: 'REACT',
    title: 'Edward Burgess - Sax on the Beach',
    description: 'Classical Summer Tour - 2022',
    time: '8:00 PM',
    image: img,
  },
  {
    id: 5,
    day: '1',
    month: 'JUL',
    year: '2025',
    type: 'TECH',
    title: 'The Lewistage Cinderella - The Little Glass Slipper',
    description: 'The Lewistage Theatre Drama Group',
    time: '8:00 PM',
    image: img2,
  },
];

// Define animation variants
const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const headerVariants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const buttonVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const UpcomingEvents = () => {
  return (
    <div>
      {/* Header*/}
      <div className="bg-indigo-900 py-8 mb-5">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white text-2xl mb-6">
            Explore some of our Event
          </h1>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full flex overflow-hidden">
            <div className="flex-1 border-r border-gray-300">
              <div className="flex items-center pl-6 pr-4 py-2">
                <span className="text-gray-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Event Type"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center pl-6 pr-4 py-2">
                <span className="text-gray-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <button className="bg-indigo-600 text-white px-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Event Card component */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Header Section */}
        <motion.h2
          className="text-3xl font-bold text-center mb-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          FEATURED UPCOMING EVENTS
        </motion.h2>

        {/* Events Section */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Date Section */}
              <div className="w-full md:w-20 flex flex-row md:flex-col items-center justify-between md:justify-center bg-blue-900 text-white p-3">
                <div className="flex items-center md:flex-col md:items-center">
                  <span className="text-lg font-bold mr-1 md:mr-0">
                    {event.month}
                  </span>
                  <span className="text-3xl font-extrabold mx-1 md:mx-0">
                    {event.day}
                  </span>
                  <span className="text-sm ml-1 md:ml-0">{event.year}</span>
                </div>
                <span className="bg-white text-black px-2 py-1 text-xs rounded md:mt-2">
                  {event.time}
                </span>
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col md:flex-row flex-1">
                {/* Event Details */}
                <div className="flex-1 p-4">
                  <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>

                  <div className="mt-4 flex space-x-4">
                    <a href="/tickets">
                      <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 cursor-pointer">
                        Get Tickets
                      </button>
                    </a>

                    <a href="/eventDetial">
                      <button className="text-gray-700 text-sm underline hover:text-gray-900 cursor-pointer">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>

                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:w-40 md:h-auto object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={buttonVariants}
          >
            <a href="/events">
              <button className="border border-blue-900 text-gray-700 px-6 py-2 rounded-md hover:bg-blue-900 hover:text-white cursor-pointer">
                View All Events
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
