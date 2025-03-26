import React from "react";
import { motion } from "framer-motion";

const AgendaSection = () => {
  const agendaItems = [
    { time: "9:00 - 9:30", title: "WELCOME AND REGISTRATION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { time: "9:00 - 9:30", title: "WELCOME AND REGISTRATION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { time: "9:00 - 9:30", title: "WELCOME AND REGISTRATION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { time: "9:00 - 9:30", title: "WELCOME AND REGISTRATION", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 font-headerFont">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AGENDA
        </motion.h2>
        <div className="relative">
          {/* Timeline Indicator */}
          <div className="absolute left-2 top-4 w-1 bg-blue-600 h-full"></div>

          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-secondary text-white rounded-tl-[30px] rounded-br-[30px] p-6 mb-6 ml-6 shadow-lg "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.span
                className="block text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {item.time}
              </motion.span>
              <motion.h3
                className="text-lg font-bold mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                {item.description}
              </motion.p>

              {/* Small Circle Indicator */}
              <div className="absolute left-[-10px] top-6 w-4 h-4 bg-blue-600 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
