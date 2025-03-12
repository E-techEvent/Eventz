import React, { useState, useEffect } from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const kitchenImages = [img1, img2, img3];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kitchenImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [kitchenImages.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % kitchenImages.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentSlide((prev) =>
        prev === 0 ? kitchenImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main image */}
      <div
        className="w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {kitchenImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src={src}
              alt={`Luxury Kitchen Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right side pagination indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        {kitchenImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="focus:outline-none"
            aria-label={`View kitchen design ${index + 1}`}
          >
            <div
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 h-1 bg-blue-500'
                  : 'w-4 h-1 bg-white'
              }`}
            ></div>
          </button>
        ))}
      </div>

      <div className="absolute bottom-16 left-16 z-20 text-white flex space-x-6">
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300">
          Explore Events
        </button>
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
