import React from 'react';
import SpeakerCard from './speakercard';
import Headshot from "../../assets/images/headshot.jpg";

const SpeakerSection = () => {
  const speakers = [
    {
      name: 'Richlove Taylor',
      title: 'CO-FOUNDER & CEO, AMGS',
      imageUrl: Headshot, // Replace with actual image path
    },
    {
        name: 'Richlove Taylor',
        title: 'CO-FOUNDER & CEO, AMGS',
        imageUrl: Headshot, // Replace with actual image path
      },
    {
        name: 'Richlove Taylor',
        title: 'CO-FOUNDER & CEO, AMGS',
        imageUrl: Headshot, // Replace with actual image path
      },
    // Add more speakers here if needed
  ];

  return (
    <section className="flex w-[80%] flex-col  item-center py-12 font-headerFont  text-center">
      <h2 className="text-3xl font-bold mb-8">SPEAKERS</h2>
      <div className="flex flex-col md:flex-row  item-center gap-4 justify-between">
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