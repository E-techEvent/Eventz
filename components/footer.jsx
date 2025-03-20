import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-11 font-headerFont">
      {/* Subscribe Section */}
      <div className="flex justify-center w-full px-4 relative">
        <div className="bg-primary text-white text-center p-4 sm:p-6 w-11/12 sm:w-3/4 md:w-1/2 absolute -top-12 sm:-top-16 z-10 rounded-md sm:rounded-lg shadow-lg">
          <h2 className="text-base sm:text-2xl font-bold mb-3">
            SUBSCRIBE FOR LATEST UPDATES
          </h2>
          <div className="flex flex-col sm:flex-row items-center max-w-xs sm:max-w-md mx-auto rounded-md sm:rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 sm:p-3 bg-secondary text-white outline-none w-full sm:w-auto"
            />
            <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 font-bold w-full sm:w-auto mt-2 sm:mt-0">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-secondary text-white pt-24  p-6">
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-2xl font-bold mt-4 sm:mt-0">E-Tech</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6 mb-4 text-sm text-center">
          <a href="/events" className="hover:underline">
            Events
          </a>
          {/* <a href="#" className="hover:underline">
            Calendar
          </a> */}
          <a href="/tickets" className="hover:underline">
            Tickets
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mb-6">
          {[FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <a key={index} href="#" className="bg-white p-2 rounded-full">
                <Icon className="text-primary w-5 h-5" />
              </a>
            )
          )}
        </div>

        {/* Horizontal Rules (Hidden on Mobile) */}
        <div className="hidden sm:flex flex-row justify-between mx-8 mb-4">
          <hr className="border-primary w-1/3" />
          <hr className="border-primary w-1/3" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-center">
          <a href="#" className="hover:underline mb-2 sm:mb-0">
            Private Policy
          </a>
          <p>Copyright © 2025. All Rights Reserved.</p>
          <a href="#" className="hover:underline mt-2 sm:mt-0">
            Terms and Conditions
          </a>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div
        className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg cursor-pointer"
        onClick={scrollToTop}
      >
        <IoIosArrowUp className="text-black w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
