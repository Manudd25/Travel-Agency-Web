import { useState } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      {/* Desktop Menu */}
      <ul className="hidden md:flex px-4">
        <li>
          <Link to="/">Home</Link>
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

      {/* Social Icons */}
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="md:hidden z-50">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/about-us" onClick={handleNav}>
              About Us
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/deals" onClick={handleNav}>
              Hot Deals
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
