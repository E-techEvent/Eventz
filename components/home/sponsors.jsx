import img1 from '../../assets/images/sponsor1.png';
import img2 from '../../assets/images/sponsor2.png';
import img3 from '../../assets/images/sponsor3.png';

const Sponsors = () => {
  // Array of sponsor data
  const sponsors = [
    {
      id: 1,
      name: 'Avant Garde',
      logo: img1,
      alt: 'Avant Garde Logo',
      url: 'https://avantgarde.com',
    },
    {
      id: 2,
      name: 'Vintage Hairstore',
      logo: img2,
      alt: 'Vintage Hairstore Logo',
      url: 'https://vintagehairstore.com',
    },
    {
      id: 3,
      name: 'Avant Garde',
      logo: img3,
      alt: 'Avant Garde Logo',
      url: 'https://avantgarde.com',
    },
    {
      id: 4,
      name: 'Vintage Hairstore',
      logo: img2,
      alt: 'Vintage Hairstore Logo',
      url: 'https://vintagehairstore.com',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">OUR SPONSORS</h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              className="transition-transform hover:scale-105 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.alt}
                className="h-12 md:h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
