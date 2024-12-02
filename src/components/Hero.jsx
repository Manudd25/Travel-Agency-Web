import { useState, useEffect } from "react"; // Import useState for managing state
import { GrLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleGoToDeals = () => {
    navigate("/deals");
  };

  const [price, setPrice] = useState(5000); // Move useState to Hero for PriceInput to access

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value)); // Ensure the value is converted to a number
  };

  // Add new states for destination input
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Update the destinations array with your actual destinations
  const destinations = [
    "Bali, Indonesia",
    "Maldives",
    "Phuket, Thailand",
    "Boracay, Philippines",
    "Seychelles",
    "Fiji",
    "Hawaii, USA",
    "Jamaica",
    "Bahamas",
    "Aruba",
    "Maui, Hawaii",
    "Bora Bora, French Polynesia",
    "Barbados",
    "Puerto Rico",
    "Zanzibar, Tanzania",
    "St. Lucia",
    "Mauritius",
    "Pattaya, Thailand",
    "Palawan, Philippines",
    "Malacca, Malaysia"
  ];

  // Handle input change and filter suggestions
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filteredSuggestions = destinations.filter(destination =>
      destination.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[100vh] relative">
      <video
        src="/sea.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-25 z-0"></div>

      <div
        className="max-w-[1200px] m-auto relative z-1 text-white h-full flex items-center justify-center px-4"
        style={{ bottom: "100%" }}
      >
        {/* Flex container wrapping both sections */}
        <div className="flex flex-col md:flex-row items-start w-full md:gap-20 gap-8">
          {/* Text section */}
          <div className="max-w-[600px]">
            <h1
              className="font-bold text-4xl"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
            >
              Travel Beyond, Discover More
            </h1>
            <h2
              className="text-4xl py-4 italic"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
            >
              With Beyond Borders
            </h2>
            <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
              Embrace the thrill of the unknown with Beyond Border. We go beyond
              ordinary destinations to bring you experiences that spark
              curiosity, fuel wanderlust, and connect you to the world in
              unforgettable ways.
            </p>
          </div>

          {/* Form section */}
          <div className="mt-6 flex flex-col gap-6 max-w-[300px] w-full">
            <div className="destinationInput relative">
              <label
                htmlFor="city"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
              >
                Search your destination
              </label>
              <div className="input flex items-center">
                <input
                  type="text"
                  placeholder="Enter name here..."
                  className="p-2 rounded text-black w-full"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSuggestions(true);
                  }}
                />
                <GrLocation className="ml-2" size={40} />
              </div>
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute w-full bg-white mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSuggestionClick(suggestion);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dateInput">
              <label
                htmlFor="date"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
              >
                Select your date
              </label>
              <div className="input flex items-center">
                <input
                  type="date"
                  className="p-2 rounded text-black w-full"
                />
              </div>
            </div>

            <div className="priceInput">
              <label
                htmlFor="price"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
              >
                Max price
              </label>
              <div className="input flex items-center">
                <input
                  type="range"
                  id="price"
                  min="500"
                  max="5000"
                  value={price}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <span className="ml-2">€{price}</span>
              </div>
            </div>

            <button
              onClick={handleGoToDeals}
              className="mt-10 rounded-full bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition"
            >
              Surprise me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
