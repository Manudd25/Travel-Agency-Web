import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaGlassMartini, FaPlane, FaBed, FaCheck } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoriteContext';

function Deals() {
  const { toggleFavorite, isFavorite } = useFavorites();

  const deals = [
    {
      id: 'd1',
      title: "Bali Luxury Escape",
      subtitle: "5★ Private Pool Villa - All Inclusive",
      image: "https://cdn.pixabay.com/photo/2018/02/22/08/05/palma-3172367_640.jpg",
      description: "Experience the ultimate Balinese getaway",
      location: "Bali, Indonesia",
      originalPrice: "€2,750",
      discountedPrice: "€1,899",
      pricePerPerson: "€949",
      rating: 4.8,
      reviews: 324,
      discount: "-32%",
      duration: "7 nights",
      departureDate: "Multiple dates available",
      departureFrom: "Berlin (BER)",
      highlights: [
        "Direct flights included",
        "Private pool villa",
        "All-inclusive meals",
        "Daily spa treatment"
      ],
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Private Pool", icon: <FaSwimmingPool className="text-cyan-500" /> },
        { name: "Luxury Spa", icon: <FaSpa className="text-pink-500" /> },
        { name: "All-Inclusive", icon: <FaUtensils className="text-red-500" /> }
      ]
    },
    {
      id: 'd2',
      title: "Maldives Overwater Experience",
      subtitle: "5★ Luxury Water Villa with Private Pool",
      image: "https://cdn.pixabay.com/photo/2014/02/08/04/55/maldives-261506_640.jpg",
      description: "Indulge in overwater luxury with this premium Maldives package",
      location: "Maldives",
      originalPrice: "€4,200",
      discountedPrice: "€2,899",
      pricePerPerson: "€1,449",
      rating: 4.9,
      reviews: 412,
      discount: "-31%",
      duration: "5 nights",
      departureDate: "Flexible dates",
      departureFrom: "Berlin (BER)",
      highlights: [
        "Business Class flights",
        "Overwater villa",
        "Half-board dining",
        "Sunset cruise"
      ],
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Private Pool", icon: <FaSwimmingPool className="text-cyan-500" /> },
        { name: "Premium Bar", icon: <FaGlassMartini className="text-purple-500" /> },
        { name: "Fine Dining", icon: <FaUtensils className="text-red-500" /> }
      ]
    },
    {
      id: 'd3',
      title: "Thai Island Hopping Adventure",
      subtitle: "4★ & 5★ Hotels - Island Tour Package",
      image: "https://cdn.pixabay.com/photo/2016/06/03/06/24/phuket-1432891_640.jpg",
      description: "Explore the best of Thailand's islands",
      location: "Thailand",
      originalPrice: "€2,900",
      discountedPrice: "€1,999",
      pricePerPerson: "€999",
      rating: 4.7,
      reviews: 286,
      discount: "-25%",
      duration: "10 nights",
      departureDate: "Multiple dates available",
      departureFrom: "Berlin (BER)",
      highlights: [
        "Return flights included",
        "Island hopping tour",
        "Daily breakfast",
        "Private transfers"
      ],
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Beach Access", icon: <FaUmbrellaBeach className="text-yellow-500" /> },
        { name: "Spa Access", icon: <FaSpa className="text-pink-500" /> },
        { name: "Fine Dining", icon: <FaUtensils className="text-red-500" /> }
      ]
    },
    {
      id: 'd4',
      title: "Seychelles Paradise Escape",
      subtitle: "5★ Private Island Resort & Spa",
      image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg",
      description: "Discover pristine beaches and luxury in Seychelles",
      location: "Mahé, Seychelles",
      originalPrice: "€4,800",
      discountedPrice: "€3,299",
      pricePerPerson: "€1,649",
      rating: 4.9,
      reviews: 246,
      discount: "-31%",
      duration: "7 nights",
      departureDate: "Multiple dates available",
      departureFrom: "Berlin (BER)",
      highlights: [
        "Premium Economy flights",
        "Beachfront villa",
        "Half-board gourmet dining",
        "Island hopping tour"
      ],
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-600" /> },
        { name: "Private Beach", icon: <FaUmbrellaBeach className="text-amber-500" /> },
        { name: "Luxury Spa", icon: <FaSpa className="text-rose-400" /> },
        { name: "Fine Dining", icon: <FaUtensils className="text-emerald-500" /> }
      ]
    }
  ];

  return (
    <div className="max-w-[1170px] m-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Hot Deals</h2>
      <p className="text-gray-600 text-center mb-8">Limited time offers on luxury escapes</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {deals.map((deal) => (
          <div 
            key={deal.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 h-full"
          >
            {/* Image Section */}
            <div className="relative">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => toggleFavorite(deal)}
                  className="text-3xl hover:scale-110 transition-transform duration-300"
                >
                  {isFavorite(deal.id) ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart className="text-white" />
                  )}
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-lg font-bold">
                {deal.discount}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{deal.title}</h3>
                <p className="text-white/90 text-sm">{deal.subtitle}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col h-full">
              {/* Price and Rating */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Price per person from</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-green-600">{deal.pricePerPerson}</p>
                      <p className="text-sm text-gray-500 line-through">{deal.originalPrice}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
                    <span className="text-green-700 font-bold mr-1">{deal.rating}</span>
                    <span className="text-xs text-gray-600">({deal.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mb-6">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaPlane className="text-indigo-400 text-lg" />
                    <span>{deal.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-purple-400 text-lg" />
                    <span>5★ Resort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUtensils className="text-emerald-400 text-lg" />
                    <span>Half Board</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <ul className="grid grid-cols-2 gap-4">
                  {deal.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-3 text-sm" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Departure Info */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">✈️</span>
                    From {deal.departureFrom}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    {deal.departureDate}
                  </p>
                </div>
              </div>

              {/* Book Button - Now will stick to bottom */}
              <div className="mt-auto">
                <button 
                  className="w-full py-2 rounded-full 
                  bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]
                  hover:scale-105 duration-300 text-white font-bold text-lg"
                >
                  View Deal
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">Free cancellation up to 48h before departure</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
