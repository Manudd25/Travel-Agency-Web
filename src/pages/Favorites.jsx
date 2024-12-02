import { AiFillHeart } from 'react-icons/ai';
import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaGlassMartini } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoriteContext';

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  // Function to render the appropriate facility icon
  const getFacilityIcon = (facilityName) => {
    switch (facilityName.toLowerCase()) {
      case 'free wifi':
        return <FaWifi />;
      case 'infinity pool':
      case 'private pool':
        return <FaSwimmingPool />;
      case 'luxury spa':
        return <FaSpa />;
      case 'fine dining':
        return <FaUtensils />;
      case 'private beach':
        return <FaUmbrellaBeach />;
      case 'beach bar':
        return <FaGlassMartini />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1140px] m-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-8">My Favorites</h2>
      {Object.keys(favorites).length === 0 ? (
        <p className="text-center text-gray-500">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(favorites).map((favorite) => (
            <div 
              key={favorite.id} 
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="relative">
                <img 
                  src={favorite.image} 
                  alt={favorite.title} 
                  className="w-full h-48 object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(favorite)}
                  className="absolute top-4 right-4 text-3xl text-white hover:scale-110 transition-transform duration-300"
                >
                  <AiFillHeart className="text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{favorite.title}</h3>
                <p className="text-gray-600 mb-2">{favorite.description}</p>
                <p className="text-gray-500 mb-2">{favorite.location}</p>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <span className="mr-2">⭐ {favorite.rating}</span>
                  <span>({favorite.reviews} reviews)</span>
                </div>
                {favorite.facilities && favorite.facilities.length > 0 && (
                  <div className="border-t border-b border-gray-100 py-4 mb-4">
                    {favorite.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center mb-2 last:mb-0">
                        <span className="text-gray-400 mr-2">
                          {getFacilityIcon(facility.name)}
                        </span>
                        <span className="text-sm">{facility.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <p className="text-green-600 font-bold text-lg">{favorite.pricePerNight}</p>
                  {favorite.discount && (
                    <p className="text-red-500 text-sm">{favorite.discount}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
