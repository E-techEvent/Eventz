import { useState, useEffect } from 'react';
import img from '../../assets/images/img4.png';

const Testimonials = () => {
  const testimonials = [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Sarah Johnson',
      image: img,
    },
    {
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      author: 'Michael Chen',
      image: img,
    },
    {
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.',
      author: 'Emily Rodriguez',
      image: img,
    },
    {
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      author: 'David Wilson',
      image: img,
    },
    {
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
      author: 'Jessica Lee',
      image: img,
    },
    {
      content:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
      author: 'Robert Kim',
      image: img,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // 3 pagination dots

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="w-full max-w-5xl mx-auto font-textFont py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 font-headerFont">
        TESTIMONIALS
      </h2>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-900 text-white p-4 rounded-lg mb-6">
                <p className="text-sm">{testimonial.content}</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
