import React from 'react';
import SpeakerCard from './speakercard';

const SpeakerSection = () => {
  const speakers = [
    {
      name: 'Richlove Taylor',
      title: 'CO-FOUNDER & CEO, AMGS',
      imageUrl: 'path/to/richlove-taylor-image.png', // Replace with actual image path
    },
    {
        name: 'Richlove Taylor',
        title: 'CO-FOUNDER & CEO, AMGS',
        imageUrl: 'path/to/richlove-taylor-image.png', // Replace with actual image path
      },
    {
        name: 'Richlove Taylor',
        title: 'CO-FOUNDER & CEO, AMGS',
        imageUrl: 'path/to/richlove-taylor-image.png', // Replace with actual image path
      },
    // Add more speakers here if needed
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">SPEAKER</h2>
      <div className="flex justify-center gap-8">
        {speakers.map((speaker, index) => (
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