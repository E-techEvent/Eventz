import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SpeakerCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-[var(--color-secondary)] rounded-xl shadow-lg p-6 sm:p-8 text-center relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Speaker image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-5 object-cover border-4 border-white shadow-md"
      />

      {/* Speaker name and title */}
      <h3 className="text-xl sm:text-2xl text-white font-headerFont font-bold mb-1">{name}</h3>
      <p className="text-sm sm:text-base text-white text-opacity-80 font-textFont mb-5">
        {title}
      </p>

      {/* Social media icons */}
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaTwitter className="text-lg sm:text-xl" />
        </a>
        <a
          href="#"
          className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram className="text-lg sm:text-xl" />
        </a>
        <a
          href="#"
          className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;
