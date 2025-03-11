import { FaBriefcase, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const whyChooseUsData = [
  {
    icon: <FaBriefcase className="text-4xl" />,
    title: 'Professionalism',
    description:
      'Our team of experts delivers top-notch solutions tailored to your needs.',
  },
  {
    icon: <FaLightbulb className="text-4xl" />,
    title: 'Innovation',
    description:
      'We bring creative ideas to life with cutting-edge technology and design.',
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: 'Security',
    description:
      'Your data and privacy are our top priorities, secured with industry standards.',
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <p className="font-semibold mt-4">
            At vero eos et accusamus et iusto odio dignissimos
          </p>
          <p className="mt-4 text-gray-600">
            Ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi.
          </p>
          <a href="/events">
            <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold cursor-pointer">
              Explore Events
            </button>
          </a>
        </div>

        {/* Image Section  */}
        <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
          <div className="absolute w-3/4 h-40 md:h-52 bg-blue-900 rounded-lg"></div>

          <div className="relative w-3/5 h-48 md:h-64 bg-gray-300 rounded shadow-lg z-10"></div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">WHY CHOOSE US</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsData.map((card, index) => (
            <div
              key={index}
              className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
