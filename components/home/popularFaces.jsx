import img from '../../assets/images/img4.png';

const popularFaces = [
  {
    name: 'John Roye',
    role: 'CTO',
    image: img,
  },
  {
    name: 'Jonahia Roy',
    role: 'CTO',
    image: img,
  },
  {
    name: 'Doc Dee',
    role: 'CTO',
    image: img,
  },
  {
    name: 'Sana Rsfh',
    role: 'CTO',
    image: img,
  },
];

const PopularFaces = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 font-textFont">
      <h2 className="text-3xl font-bold text-center mb-6 font-headerFont">
        POPULAR FACES
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Text Section */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-lg font-bold mb-2 font-headerFont">
            SEE SOME OF THE POPULAR FACES
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod t
          </p>
          <button className="bg-primary text-white font-bold px-4 py-2 rounded-md">
            Buy Ticket
          </button>
        </div>

        {/* Right Grid Section */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          {popularFaces.map((person, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mt-4">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFaces;
