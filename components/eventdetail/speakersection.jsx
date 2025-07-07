import React from 'react';
import SpeakerCard from './speakercard';
const SpeakerSection = ({ speakers }) => { // Accept speakers as prop
  // Mock speakers if not provided, or for standalone testing
  const defaultSpeakers = [
    {
      name: 'Richlove Taylor',
      title: 'CO-FOUNDER & CEO, AMGS',
      imageUrl: '/images/speaker.jpg', // Use the public speaker image
    },
    {
        name: 'Jane Smith',
        title: 'Lead Developer, InnovateX',
        imageUrl: '/images/speaker.jpg', // Use the public speaker image
      },
    {
        name: 'David Lee',
        title: 'Marketing Director, Global Corp',
        imageUrl: '/images/speaker.jpg', // Use the public speaker image
      },
  ];

  const speakersToDisplay = speakers && speakers.length > 0 ? speakers : defaultSpeakers;

  return (
    <section className="py-8 sm:py-12 font-headerFont text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">SPEAKERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {speakersToDisplay.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            title={speaker.title}
            imageUrl={speaker.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default SpeakerSection;
