import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaGlassMartini } from 'react-icons/fa';
import { useFavorites } from '../contexts/FavoriteContext';

function Resorts() {
  const [priceFilter, setPriceFilter] = useState('all');
  const [facilityFilter, setFacilityFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const resorts = [
    {
      id: 1,
      name: "Bali Paradise Resort & Spa",
      location: "Bali, Indonesia",
      price: 510,
      rating: 4.8,
      image: "https://cdn.pixabay.com/photo/2018/02/22/08/05/palma-3172367_640.jpg",
      description: "Luxurious beachfront resort with private villas and infinity pools overlooking the Indian Ocean.",
      reviews: 324,
      pricePerNight: "€510",
      discount: "Save 15%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 2,
      name: "Maldives Ocean Lodge",
      location: "Maldives",
      price: 829,
      rating: 4.9,
      image: "https://cdn.pixabay.com/photo/2014/02/08/04/55/maldives-261506_640.jpg",
      description: "Overwater bungalows with direct access to crystal clear waters and vibrant coral reefs.",
      reviews: 412,
      pricePerNight: "€829",
      discount: "Save 20%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Private Pool" },
        { icon: <FaUtensils className="text-red-500" />, name: "Fine Dining" },
        { icon: <FaGlassMartini className="text-purple-500" />, name: "Beach Bar" }
      ]
    },
    {
      id: 3,
      name: "Phuket Sanctuary Resort",
      location: "Phuket, Thailand",
      price: 430,
      rating: 4.6,
      image: "https://cdn.pixabay.com/photo/2016/06/03/06/24/phuket-1432891_640.jpg",
      description: "Traditional Thai luxury with modern amenities, spa services, and stunning Andaman Sea views.",
      reviews: 280,
      pricePerNight: "€430",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 4,
      name: "Boracay White Beach Resort",
      location: "Boracay, Philippines",
      price: 450,
      rating: 4.7,
      image: "https://cdn.pixabay.com/photo/2017/05/30/13/01/relax-2356858_640.jpg",
      description: "White sand beaches and world-class water sports facilities with sunset dining experiences.",
      reviews: 350,
      pricePerNight: "€450",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 5,
      name: "Seychelles Royal Island Resort",
      location: "Seychelles",
      price: 765,
      rating: 4.9,
      image: "https://cdn.pixabay.com/photo/2016/05/19/22/53/sea-1404191_640.jpg",
      description: "Exclusive island resort with private beaches, gourmet dining, and luxury spa treatments.",
      reviews: 420,
      pricePerNight: "€765",
      discount: "Save 15%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 6,
      name: "Fiji Blue Lagoon Resort",
      location: "Fiji",
      price: 680,
      rating: 4.8,
      image: "https://cdn.pixabay.com/photo/2021/02/02/12/34/resort-5973816_640.jpg",
      description: "Paradise found with overwater villas, pristine beaches, and world-class diving experiences.",
      reviews: 380,
      pricePerNight: "€680",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 7,
      name: "Hawaii Oceanfront Resort",
      location: "Hawaii, USA",
      price: 595,
      rating: 4.7,
      image: "https://cdn.pixabay.com/photo/2015/11/10/14/36/hawaii-1037043_640.jpg",
      description: "Tropical paradise with volcanic views, private beaches, and authentic Hawaiian experiences.",
      reviews: 300,
      pricePerNight: "€595",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 8,
      name: "Jamaica Bay Resort & Spa",
      location: "Jamaica",
      price: 445,
      rating: 4.6,
      image: "https://cdn.pixabay.com/photo/2020/04/29/18/36/jamaica-5110094_640.jpg",
      description: "Caribbean luxury with reggae vibes, pristine beaches, and water sports activities.",
      reviews: 320,
      pricePerNight: "€445",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 9,
      name: "Bahamas Paradise Cove",
      location: "Bahamas",
      price: 525,
      rating: 4.7,
      image: "https://cdn.pixabay.com/photo/2023/03/20/15/19/hotel-7865157_640.jpg",
      description: "Crystal clear waters, white sand beaches, and luxury accommodations in paradise.",
      reviews: 350,
      pricePerNight: "€525",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 10,
      name: "Aruba Palm Beach Resort",
      location: "Aruba",
      price: 490,
      rating: 4.8,
      image: "https://cdn.pixabay.com/photo/2013/11/19/09/30/resort-213151_640.jpg",
      description: "Perfect climate year-round with casino, spa, and endless beach activities.",
      reviews: 380,
      pricePerNight: "€490",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 11,
      name: "Maui Beachfront Resort",
      location: "Maui, Hawaii",
      price: 715,
      rating: 4.9,
      image: "https://cdn.pixabay.com/photo/2013/08/21/22/32/beach-174561_640.jpg",
      description: "Luxury Hawaiian resort with golf course, spa, and breathtaking ocean views.",
      reviews: 400,
      pricePerNight: "€715",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 12,
      name: "Bora Bora Pearl Resort",
      location: "Bora Bora, French Polynesia",
      price: 890,
      rating: 5.0,
      image: "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg",
      description: "Iconic overwater bungalows with Mount Otemanu views and private lagoon access.",
      reviews: 450,
      pricePerNight: "€890",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 13,
      name: "Barbados Coral Resort",
      location: "Barbados",
      price: 475,
      rating: 4.6,
      image: "https://media.istockphoto.com/id/996917590/de/foto/bunte-h%C3%A4user-auf-der-tropischen-insel-barbados.jpg?b=1&s=612x612&w=0&k=20&c=UrN8Iygczo2hL86OSkOu0kCL70clTTTg_AqJO3id-4c=",
      description: "Caribbean charm with coral reefs, water sports, and beachfront dining.",
      reviews: 300,
      pricePerNight: "€475",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 14,
      name: "Puerto Rico Beach Resort",
      location: "Puerto Rico",
      price: 435,
      rating: 4.5,
      image: "https://media.istockphoto.com/id/183412550/de/foto/bathsheba-barbados.jpg?b=1&s=612x612&w=0&k=20&c=H_v0e480rkLFaty7xcxU_4IWEHfUFdc6NmIaDIPziQk=",
      description: "Latin Caribbean flair with rainforest views and historic old town nearby.",
      reviews: 280,
      pricePerNight: "€435",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 15,
      name: "Zanzibar Beach Paradise",
      location: "Zanzibar, Tanzania",
      price: 385,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1592229506490-dda533630362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFphbnppYmFyJTIwcmVzb3J0fGVufDB8fDB8fHww",
      description: "African island paradise with spice tours, historic Stone Town, and pristine beaches.",
      reviews: 320,
      pricePerNight: "€385",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 16,
      name: "St. Lucia Sanctuary",
      location: "St. Lucia",
      price: 645,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Piton mountain views with chocolate tours and volcanic spa treatments.",
      reviews: 400,
      pricePerNight: "€645",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 17,
      name: "Mauritius Blue Bay Resort",
      location: "Mauritius",
      price: 555,
      rating: 4.7,
      image: "https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Indian Ocean luxury with golf courses, water sports, and multicultural cuisine.",
      reviews: 350,
      pricePerNight: "€555",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 18,
      name: "Pattaya Beach Resort",
      location: "Pattaya, Thailand",
      price: 325,
      rating: 4.4,
      image: "https://images.pexels.com/photos/15796414/pexels-photo-15796414/free-photo-of-natur-ferien-entspannung-wasser.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vibrant beach life with water parks, entertainment, and Thai hospitality.",
      reviews: 250,
      pricePerNight: "€325",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 19,
      name: "Palawan Island Resort",
      location: "Palawan, Philippines",
      price: 465,
      rating: 4.8,
      image: "https://cdn.pixabay.com/photo/2018/04/05/07/41/water-3292079_640.jpg",
      description: "Underground river tours, island hopping, and pristine beach experiences.",
      reviews: 380,
      pricePerNight: "€465",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    },
    {
      id: 20,
      name: "Malacca Straits Resort",
      location: "Malacca, Malaysia",
      price: 295,
      rating: 4.5,
      image: "https://cdn.pixabay.com/photo/2019/11/28/19/19/landscape-4659922_640.jpg",
      description: "Historical charm meets modern luxury with cultural tours and coastal views.",
      reviews: 200,
      pricePerNight: "€295",
      discount: "Save 10%",
      facilities: [
        { icon: <FaWifi className="text-blue-500" />, name: "Free WiFi" },
        { icon: <FaSwimmingPool className="text-cyan-500" />, name: "Infinity Pool" },
        { icon: <FaSpa className="text-pink-500" />, name: "Luxury Spa" },
        { icon: <FaUmbrellaBeach className="text-yellow-500" />, name: "Private Beach" }
      ]
    }
  ];

  const filterResorts = () => {
    return resorts.filter(resort => {
      const matchesPrice = priceFilter === 'all' || 
        (priceFilter === 'low' && resort.price < 300) ||
        (priceFilter === 'medium' && resort.price >= 300 && resort.price <= 500) ||
        (priceFilter === 'high' && resort.price > 500);

      const matchesFacility = facilityFilter === 'all' || 
        resort.facilities.some(facility => facility.name === facilityFilter);

      const matchesLocation = locationFilter === 'all' || 
        resort.location.includes(locationFilter);

      return matchesPrice && matchesFacility && matchesLocation;
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Luxury Resorts</h1>
      
      {/* Filter Section */}
      <div className="mb-8 flex justify-center space-x-4">
        <select 
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Prices</option>
          <option value="low">Under €300</option>
          <option value="medium">€300 - €500</option>
          <option value="high">Above €500</option>
        </select>

        <select 
          value={facilityFilter}
          onChange={(e) => setFacilityFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Facilities</option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Infinity Pool">Infinity Pool</option>
          <option value="Luxury Spa">Luxury Spa</option>
          <option value="Private Beach">Private Beach</option>
          <option value="Private Pool">Private Pool</option>
          <option value="Beach Bar">Beach Bar</option>
          <option value="Fine Dining">Fine Dining</option>
        </select>

        <select 
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Locations</option>
          <option value="Bali, Indonesia">Bali, Indonesia</option>
          <option value="Maldives">Maldives</option>
          <option value="Phuket, Thailand">Phuket, Thailand</option>
          <option value="Boracay, Philippines">Boracay, Philippines</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Fiji">Fiji</option>
          <option value="Hawaii, USA">Hawaii, USA</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Aruba">Aruba</option>
          <option value="Maui, Hawaii">Maui, Hawaii</option>
          <option value="Bora Bora, French Polynesia">Bora Bora, French Polynesia</option>
          <option value="Barbados">Barbados</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Zanzibar, Tanzania">Zanzibar, Tanzania</option>
          <option value="St. Lucia">St. Lucia</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Pattaya, Thailand">Pattaya, Thailand</option>
          <option value="Palawan, Philippines">Palawan, Philippines</option>
          <option value="Malacca, Malaysia">Malacca, Malaysia</option>
        </select>
      </div>

      {/* Resorts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterResorts().map((resort) => (
          <div key={resort.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative">
              <img 
                src={resort.image} 
                alt={resort.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => toggleFavorite(resort)}
                className="absolute top-4 right-4 text-3xl text-white hover:scale-110 transition-transform duration-300"
              >
                {isFavorite(resort.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-white" />
                )}
              </button>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{resort.name}</h3>
                <p className="text-gray-600 mb-2">{resort.location}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{resort.description}</p>
              </div>
              
              <div className="border-t border-b border-gray-100 py-4 mb-4">
                {resort.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center mb-2 last:mb-0">
                    <span className="text-gray-400 mr-2">{facility.icon}</span>
                    <span className="text-sm">{facility.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">€{resort.price}</span>
                  <p className='ml-[-5rem]'>/Night</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{resort.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;
