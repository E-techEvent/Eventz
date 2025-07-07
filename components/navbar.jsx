import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary py-4 px-6 text-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            E-Tech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-gray-200 transition duration-300">
             
              Home
            </Link>
            <Link to="/events" className="hover:text-gray-200 transition duration-300">
              Events
            </Link>
            <Link to="/contact" className="hover:text-gray-200 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/auth/signin"
              className="hover:text-gray-200 transition duration-300"
            >
              Login
            </Link>
            <Link to="/dashboard/admin">
            <button className="bg-white text-primary rounded-full px-6 py-2 font-bold hover:bg-gray-100 transition duration-300 cursor-pointer">
              Dashboard
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-4">
            <a
              href="/"
              className="block hover:text-gray-200 transition duration-300 py-2"
            >
              Home
            </a>
            <a
              href="/events"
              className="block hover:text-gray-200 transition duration-300 py-2"
            >
              Events
            </a>
            <a
              href="/contact"
              className="block hover:text-gray-200 transition duration-300 py-2"
            >
              Contact
            </a>
            <a
              href="/auth/signin"
              className="block hover:text-gray-200 transition duration-300 py-2"
            >
              Login
            </a>
            <button className="bg-white text-blue-900 rounded-full px-6 py-2 font-bold w-full hover:bg-gray-100 transition duration-300 cursor-pointer">
              Tickets
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
