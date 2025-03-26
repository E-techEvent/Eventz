import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SpeakerCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-10 text-center w-[90%] md:w-[30%] relative overflow-hidden">
      {/* Speaker image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      {/* Speaker name and title */}
      <h3 className="text-lg text-white font-TextFont font-semibold">{name}</h3>
      <p className="text-sm text-white font-textFont mb-4">{title}</p>

      {/* Social media icons with blue background */}
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-blue-900 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <FaTwitter className="text-lg" />
        </a>
        <a
          href="#"
          className="bg-blue-900 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <FaInstagram className="text-lg" />
        </a>
        <a
          href="#"
          className="bg-blue-900 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <FaLinkedin className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;