import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/resorts'); // Update with the correct path to your resort page
  };

  return (
    <div id="bookNow" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option value="">Select a tropical destination</option>
            <option value="bali">Bali, Indonesia</option>
            <option value="maldives">Maldives</option>
            <option value="phuket">Phuket, Thailand</option>
            <option value="boracay">Boracay, Philippines</option>
            <option value="seychelles">Seychelles</option>
            <option value="fiji">Fiji</option>
            <option value="hawaii">Hawaii, USA</option>
            <option value="jamaica">Jamaica</option>
            <option value="bahamas">Bahamas</option>
            <option value="aruba">Aruba</option>
            <option value="maui">Maui, Hawaii</option>
            <option value="bora-bora">Bora Bora, French Polynesia</option>
            <option value="barbados">Barbados</option>
            <option value="puerto-rico">Puerto Rico</option>
            <option value="zanzibar">Zanzibar, Tanzania</option>
            <option value="st-lucia">St. Lucia</option>
            <option value="mauritius">Mauritius</option>
            <option value="pattaya">Pattaya, Thailand</option>
            <option value="palawan">Palawan, Philippines</option>
            <option value="malacca">Malacca, Malaysia</option>
          </select>
        </div>

        {/* Wrap these fields in a flex container with responsive classes */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button
              className="px-4 py-2 border rounded-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white w-full"
              onClick={handleButtonClick}
            >
              Rates & Availabilities
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;