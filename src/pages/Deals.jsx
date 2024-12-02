import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaGlassMartini } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoriteContext';

function Deals() {
  const { toggleFavorite, isFavorite } = useFavorites();

  const deals = [
    {
      id: 'd1',
      title: "Summer Special - Bali Paradise Resort",
      image: "https://cdn.pixabay.com/photo/2018/02/22/08/05/palma-3172367_640.jpg",
      description: "Experience luxury with our special summer package including spa treatments and dining credits.",
      location: "Bali, Indonesia",
      originalPrice: "€750",
      discountedPrice: "€510",
      rating: 4.8,
      reviews: 324,
      discount: "Save 32%",
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Infinity Pool", icon: <FaSwimmingPool className="text-cyan-500" /> },
        { name: "Luxury Spa", icon: <FaSpa className="text-pink-500" /> },
        { name: "Private Beach", icon: <FaUmbrellaBeach className="text-yellow-500" /> }
      ]
    },
    {
      id: 'd2',
      title: "Maldives Getaway Package",
      image: "https://cdn.pixabay.com/photo/2014/02/08/04/55/maldives-261506_640.jpg",
      description: "All-inclusive package with water villa stay and water sports activities.",
      location: "Maldives",
      originalPrice: "€1200",
      discountedPrice: "€829",
      rating: 4.9,
      reviews: 412,
      discount: "Save 31%",
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Private Pool", icon: <FaSwimmingPool className="text-cyan-500" /> },
        { name: "Beach Bar", icon: <FaGlassMartini className="text-purple-500" /> },
        { name: "Fine Dining", icon: <FaUtensils className="text-red-500" /> }
      ]
    },
    {
      id: 'd3',
      title: "Phuket Luxury Escape",
      image: "https://cdn.pixabay.com/photo/2016/06/03/06/24/phuket-1432891_640.jpg",
      description: "Exclusive beachfront villa with private chef and daily spa treatments.",
      location: "Phuket, Thailand",
      originalPrice: "€900",
      discountedPrice: "€675",
      rating: 4.7,
      reviews: 286,
      discount: "Save 25%",
      facilities: [
        { name: "Free WiFi", icon: <FaWifi className="text-blue-500" /> },
        { name: "Private Pool", icon: <FaSwimmingPool className="text-cyan-500" /> },
        { name: "Luxury Spa", icon: <FaSpa className="text-pink-500" /> },
        { name: "Fine Dining", icon: <FaUtensils className="text-red-500" /> }
      ]
    }
  ];

  return (
    <div className="max-w-[1140px] m-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Special Deals & Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div 
            key={deal.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => toggleFavorite(deal)}
                className="absolute top-4 right-4 text-3xl text-white hover:scale-110 transition-transform duration-300"
              >
                {isFavorite(deal.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-white" />
                )}
              </button>
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {deal.discount}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-600 mb-2">{deal.location}</p>
              <p className="text-gray-700 mb-4">{deal.description}</p>

              <div className="flex items-center mb-4 text-sm text-gray-600">
                <span className="mr-2">⭐ {deal.rating}</span>
                <span>({deal.reviews} reviews)</span>
              </div>

              <div className="border-t border-b border-gray-100 py-4 mb-4">
                {deal.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center mb-2 last:mb-0">
                    <span className="text-gray-400 mr-2">{facility.icon}</span>
                    <span className="text-sm">{facility.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-500 line-through text-sm">{deal.originalPrice}</p>
                    <p className="text-2xl font-bold text-blue-600">{deal.discountedPrice}</p>
                  </div>
                  <button className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
