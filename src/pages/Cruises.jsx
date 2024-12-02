import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaGlassMartini, FaTheaterMasks, FaShip, FaConciergeBell, FaDumbbell, FaCocktail, FaGamepad, FaBed } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoriteContext';

function Cruises() {
  const { toggleFavorite, isFavorite } = useFavorites();

  // Helper function to get the appropriate icon for each facility
  const getIcon = (facility) => {
    const icons = {
      "All-Inclusive": <FaConciergeBell className="text-gold-500" />,
      "Onboard Entertainment": <FaTheaterMasks className="text-purple-500" />,
      "Excursions": <FaShip className="text-blue-500" />,
      "Fine Dining": <FaUtensils className="text-red-500" />,
      "Spa Services": <FaSpa className="text-pink-500" />,
      "Guided Tours": <FaUmbrellaBeach className="text-yellow-500" />,
      "Infinity Pool": <FaSwimmingPool className="text-cyan-500" />,
      "Premium Bar": <FaCocktail className="text-orange-500" />,
      "Fitness Center": <FaDumbbell className="text-green-500" />,
      "Kids Club": <FaGamepad className="text-purple-500" />,
      "Free WiFi": <FaWifi className="text-blue-400" />,
      "Evening Shows": <FaTheaterMasks className="text-indigo-500" />,
      "Luxury Suites": <FaBed className="text-gray-500" />,
      "Wine Tasting": <FaGlassMartini className="text-purple-500" />,
      "Gourmet Dinner": <FaUtensils className="text-red-500" />,
      "Sunset Views": <FaUmbrellaBeach className="text-yellow-500" />,
      "Swimming Stops": <FaSwimmingPool className="text-blue-500" />
    };
    return icons[facility] || <FaShip className="text-gray-500" />;
  };

  const cruises = [
    {
      id: 'c1',
      name: "Caribbean Adventure Cruise",
      image: "https://cdn.pixabay.com/photo/2020/03/03/23/06/vacation-4900049_640.jpg",
      price: 1200,
      location: "Caribbean Islands",
      description: "Explore the beautiful Caribbean islands with our luxury cruise package.",
      duration: "7 nights",
      rating: 4.7,
      facilities: [
        "All-Inclusive",
        "Onboard Entertainment",
        "Excursions",
        "Premium Bar",
        "Luxury Suites"
      ]
    },
    {
      id: 'c2',
      name: "Mediterranean Escape",
      image: "https://cdn.pixabay.com/photo/2015/09/12/17/49/cruise-937069_640.jpg",
      price: 1500,
      location: "Mediterranean Sea",
      description: "Discover the rich history and stunning landscapes of the Mediterranean. Visit Greece, Italy, and Spain.",
      duration: "10 nights",
      rating: 4.8,
      facilities: [
        "Fine Dining",
        "Spa Services",
        "Guided Tours",
        "Free WiFi"
      ]
    },
    {
        id: 'c3',
        name: "Santorini Sunset Cruise",
        image: "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pfGVufDB8fDB8fHww",
        price: 89,
        location: "Santorini, Greece",
        description: "Romantic sunset cruise around Santorini's caldera with wine tasting and dinner.",
        duration: "5 hours",
        rating: 4.9,
        facilities: [
          "Wine Tasting",
          "Gourmet Dinner",
          "Sunset Views",
          "Swimming Stops"
        ]
    },
  ];    

  return (
    <div className="max-w-[1140px] m-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold text-gray-700 mb-8">Luxury Cruises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cruises.map((cruise) => (
          <div 
            key={cruise.id} 
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative bg-white flex flex-col h-full min-h-[600px]"
          >
            <div className="relative">
              <img 
                src={cruise.image} 
                alt={cruise.name} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => toggleFavorite(cruise)}
                className="absolute top-4 right-4 text-3xl text-white hover:scale-110 transition-transform duration-300"
              >
                {isFavorite(cruise.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-white" />
                )}
              </button>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {cruise.duration}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{cruise.name}</h3>
                  <p className="text-green-600 font-bold">€{cruise.price}</p>
                </div>
                <p className="text-gray-600 mb-2">{cruise.location}</p>
                <p className="text-gray-700 mb-4">{cruise.description}</p>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <span className="mr-2">⭐ {cruise.rating}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex-grow">
                  <p className="font-semibold mb-2">Facilities:</p>
                  <ul className="flex flex-col gap-2">
                    {cruise.facilities.map((facility, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2 text-lg">{getIcon(facility)}</span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cruises;
