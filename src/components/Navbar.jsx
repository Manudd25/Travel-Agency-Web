import { useState } from "react";
import { FaBars, FaBlog } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleBlogClick = () => {
    window.open("https://thetropicaltravelers.com/travel-blog/", "_blank");
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  return (
    <div className="w-full flex justify-between items-center text-white bg-gray-700/80 relative">
      {/* Desktop Menu */}
      <ul className="hidden md:flex px-4">
        <li className="relative group">
          <Link to="/" className="cursor-pointer">Home</Link>
          {/* Dropdown Menu */}
          <ul className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-md rounded-md z-10">
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/resorts">Resorts</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/cruises">Cruises</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/excursions">Excursions</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/deals">Hot Deals</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Account Icons and Blog Icon */}
      <div className="flex justify-between items-center px-4">
        <AiOutlineHeart
          size={20}
          className="mx-4 cursor-pointer"
          onClick={handleFavoritesClick}
          title="My Favorites"
        />
        <FaRegUser size={20} className="mx-4 cursor-pointer" />
        <FaBlog
          size={20}
          className="mx-4 cursor-pointer"
          onClick={handleBlogClick}
          title="Visit our Travel Blog"
        />
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="mobile-menu-button md:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }`}
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link to="/" onClick={() => setNav(false)}>
              Home
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/about-us" onClick={() => setNav(false)}>
              About us
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/deals" onClick={() => setNav(false)}>
              Hot Deals
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/contact" onClick={() => setNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
