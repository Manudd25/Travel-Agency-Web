import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full py-6 px-8 md:px-12">
        {/* Top Section with Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full">
          <div className="flex items-center mb-4 md:mb-0">
            <IoPaperPlaneOutline size={24} className="text-[var(--primary-dark)] mr-2"/>
            <h1 className="text-lg font-bold">BEYOND BORDERS</h1>
          </div>
          <div className="flex space-x-4">
            <FaFacebook size={20} className="cursor-pointer hover:text-[var(--primary-light)]" />
            <FaTwitter size={20} className="cursor-pointer hover:text-[var(--primary-light)]" />
            <FaInstagram size={20} className="cursor-pointer hover:text-[var(--primary-light)]" />
            <FaTripadvisor size={20} className="cursor-pointer hover:text-[var(--primary-light)]" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 w-full">
          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-2 ml-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-[var(--primary-light)]">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-[var(--primary-light)]">About Us</Link></li>
              <li><Link to="/deals" className="hover:text-[var(--primary-light)]">Hot Deals</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--primary-light)]">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-md font-semibold mb-2 ml-3">Popular Destinations</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[var(--primary-light)]">Bali, Indonesia</a></li>
              <li><a href="#" className="hover:text-[var(--primary-light)]">Maldives</a></li>
              <li><a href="#" className="hover:text-[var(--primary-light)]">Phuket, Thailand</a></li>
              <li><a href="#" className="hover:text-[var(--primary-light)]">Mauritius</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-2 ml-3">Contact Info</h3>
            <ul className="space-y-1">
              <li>Email: info@beyondborders.com</li>
              <li>Phone: +49 30 230 52 001</li>
              <li>Address: Friedrichstraße 68, 10117 Berlin</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-md font-semibold mb-2">Newsletter</h3>
            <p className="mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-1 rounded-l-md text-gray-900 w-full"
              />
              <button className="bg-[var(--primary-dark)] px-3 py-1 rounded-r-md hover:bg-[var(--primary-light)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-2 md:mb-0 text-sm">&copy; 2024 Beyond Borders. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-[var(--primary-light)]">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[var(--primary-light)]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;