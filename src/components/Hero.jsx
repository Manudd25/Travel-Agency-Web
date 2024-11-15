import { GrLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "../index.css"

function Hero() {

  const navigate = useNavigate();

  const handleGoToDeals = () => {
    navigate("/deals");
  }

  return (
    <div className="hero-container w-full h-[100vh] relative">
    <video
      src="./sea.mp4"
      autoPlay
      muted
      loop
      className="w-full h-full object-cover"
    />
  
    <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
  
    <div className="max-w-[1200px] m-auto relative z-1 text-white h-full flex items-center justify-center px-4 md:justify-center md:items-center sm:justify-end sm:items-end sm:bottom-0" style={{bottom: "100%"}}>
      {/* Flex container wrapping both sections */}
      <div className="flex flex-col md:flex-row items-start w-full md:gap-20 gap-8">
        {/* Text section */}
        <div className="max-w-[600px]">
          <h1 className="font-bold text-4xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
            Travel Beyond, Discover More
          </h1>
          <h2 className="text-4xl py-4 italic" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
            With Beyond Borders
          </h2>
          <p className="hero-description" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
            Embrace the thrill of the unknown with Beyond Border. We go beyond
            ordinary destinations to bring you experiences that spark curiosity,
            fuel wanderlust, and connect you to the world in unforgettable ways.
          </p>
        </div>
  
        {/* Form section */}
        <div className="mt-6 flex flex-col gap-6 max-w-[300px] w-full">
          <div className="destinationInput">
            <label htmlFor="city" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>Search your destination</label>
            <div className="input flex items-center">
              <input type="text" placeholder="Enter name here..." className="p-2 rounded text-black w-full" />
              <GrLocation className="ml-2" size={40} />
            </div>
          </div>
  
          <div className="dateInput">
            <label htmlFor="date" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>Select your date</label>
            <div className="input flex items-center">
              <input type="date" className="p-2 rounded text-black w-full" />
            </div>
          </div>
  
          <div className="priceInput">
            <label htmlFor="price" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>Max price</label>
            <div className="input flex items-center">
              <input type="range" min="500" max="5000" className="w-full" />
              <span className="ml-2">€5000</span>
            </div>
            <button onClick={handleGoToDeals} className="mt-10 rounded-full bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition">Surprise me!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Hero;

