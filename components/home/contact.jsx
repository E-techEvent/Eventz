import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 font-textFont">
      <h2 className="text-3xl font-bold text-center mb-12 font-headerFont">
        CONTACT US
      </h2>

      <form onSubmit={handleSubmit} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-secondary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-secondary"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="phone" className="text-gray-600 mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <div className="mb-12">
          <label htmlFor="message" className="text-gray-600 mb-2 block">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 font-medium text-lg hover:bg-secondary transition-colors"
        >
          Send
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 font-headerFont">ADDRESS</h3>
          <p className="text-gray-700">Remote, Worldwide</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 font-headerFont">EMAIL US</h3>
          <a
            href="mailto:example@etech.com"
            className="text-gray-700 hover:text-indigo-600"
          >
            example@etech.com
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 font-headerFont">
            PHONE NUMBER
          </h3>
          <a
            href="tel:+233500000000"
            className="text-gray-700 hover:text-indigo-600"
          >
            (+233) 500 000 000
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
