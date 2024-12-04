import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCar, FaUtensils, FaSwimmer, FaUserTie, FaWineGlass, FaUmbrellaBeach, FaUserGraduate, FaCoffee, FaFish, FaShip } from 'react-icons/fa';
import { MdKayaking } from "react-icons/md";
import { TbScubaMask } from 'react-icons/tb';
import { useFavorites } from '../contexts/FavoriteContext';

function Excursions() {
  const { toggleFavorite, isFavorite } = useFavorites();

  // Helper function to get the appropriate icon for each facility
  const getIcon = (facility) => {
    const icons = {
      "Hotel Pickup/Drop-off": <FaCar className="text-blue-500" />,
      "Lunch Buffet": <FaUtensils className="text-orange-500" />,
      "Snorkeling Gear": <FaSwimmer className="text-cyan-500" />,
      "Professional Guide": <FaUserTie className="text-gray-500" />,
      "Wine Tasting": <FaWineGlass className="text-purple-500" />,
      "Gourmet Dinner": <FaUtensils className="text-red-500" />,
      "Sunset Views": <FaUmbrellaBeach className="text-yellow-500" />,
      "Swimming Stops": <FaSwimmer className="text-blue-500" />,
      "Diving Equipment": <TbScubaMask className="text-blue-600" />,
      "Certified Instructors": <FaUserGraduate className="text-green-500" />,
      "Lunch & Refreshments": <FaCoffee className="text-brown-500" />,
      "Marine Life Guide": <FaFish className="text-teal-500" />,
      "Speedboat Tour": <FaShip className="text-blue-500" />,
      "Kayaking Equipment": <MdKayaking className="text-cyan-600" />
    };
    return icons[facility] || <FaShip className="text-gray-500" />;
  };

  const excursions = [
    {
      id: 'e1',
      name: "Phi Phi Islands Adventure",
      image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_640.jpg",
      price: 120,
      location: "Phuket, Thailand",
      description: "Full-day speedboat tour to Phi Phi Islands, incl. Maya Bay and snorkeling spots. Discover the vibrant marine life and stunning beaches.",
      duration: "Full Day (8 hours)",
      rating: 4.8,
      includes: [
        "Hotel Pickup/Drop-off",
        "Lunch Buffet",
        "Snorkeling Gear",
        "Professional Guide"
      ]
    },
    {
      id: 'e2',
      name: "Bali Temple & Rice Terraces Tour",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaSUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 75,
      location: "Bali, Indonesia",
      description: "Discover Bali's cultural heritage with visits to ancient temples and the iconic Tegalalang rice terraces.",
      duration: "Full Day (10 hours)",
      rating: 4.8,
      includes: [
        "Hotel Pickup/Drop-off",
        "Professional Guide",
        "Lunch Buffet",
        "Guided Tours"
      ]
    },
    {
      id: 'e3',
      name: "Great Barrier Reef Diving",
      image: "https://images.unsplash.com/photo-1682687981907-170c006e3744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWF0JTIwYmFycmllciUyMHJpZWYlMjBkaXZpbmd8ZW58MHx8MHx8fDA%3D",
      price: 195,
      location: "Cairns, Australia",
      description: "Discover the underwater wonders of the Great Barrier Reef with certified diving instructors. Experience the world's largest coral reef system.",
      duration: "Full Day (10 hours)",
      rating: 4.7,
      includes: [
        "Diving Equipment",
        "Certified Instructors",
        "Lunch & Refreshments",
        "Marine Life Guide"
      ]
    },
    {
      id: 'e4',
      name: "James Bond Island Adventure",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFtZXMlMjBib25kJTIwaXNsYW5kfGVufDB8fDB8fHww",
      price: 110,
      location: "Phang Nga Bay, Thailand",
      description: "Explore the famous James Bond Island and surrounding limestone cliffs by speedboat, with kayaking through hidden lagoons and caves.",
      duration: "Full Day (8 hours)",
      rating: 4.7,
      includes: [
        "Hotel Pickup/Drop-off",
        "Speedboat Tour",
        "Lunch Buffet",
        "Kayaking Equipment"
      ]
    }
  ];

  return (
    <div className="max-w-[1140px] m-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold text-gray-700 mb-8">Exciting Excursions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {excursions.map((excursion) => (
          <div 
            key={excursion.id} 
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative bg-white flex flex-col h-full"
          >
            <div className="relative">
              <img 
                src={excursion.image} 
                alt={excursion.name} 
                className="w-full h-56 object-cover"
              />
              <button 
                onClick={() => toggleFavorite(excursion)}
                className="absolute top-4 right-4 text-3xl text-white hover:scale-110 transition-transform duration-300"
              >
                {isFavorite(excursion.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-white" />
                )}
              </button>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {excursion.duration}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{excursion.name}</h3>
                  <p className="text-green-600 font-bold">€{excursion.price}</p>
                </div>
                <p className="text-gray-600 mb-2">{excursion.location}</p>
                <p className="text-gray-700 mb-4">{excursion.description}</p>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <span className="mr-2">⭐ {excursion.rating}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold mb-2">Includes:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {excursion.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2 text-lg">{getIcon(item)}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button 
                className="w-full py-2 rounded-full 
                bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]
                hover:scale-105 duration-300 text-white"
              >
                Book Excursion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Excursions;
