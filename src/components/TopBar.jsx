import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function TopBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState("");

  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state based on authentication
      if (!currentUser) setLogoutMessage(""); // Clear logout message when user is not logged in
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleGoToLogIn = () => {
    navigate("/logIn"); // Navigate to Log In page
  };

  const handleGoToContact = () => {
  navigate("/contact");
  }; // Navigating to the contact page

  const handleLogOut = async () => {
    try {
      await signOut(auth); // Log out the user
      setLogoutMessage("You logged out successfully!"); // Set logout message
      setUser(null); // Reset user state
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <IoPaperPlaneOutline size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">BEYOND BORDERS</h1>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">9AM - 6PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">+49 30 230 52 001</p>
        </div>
        <button 
        onClick={handleGoToContact}
          className="px-4 py-2 border rounded-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white"
        >
          Book Now!
        </button>
        {user ? (
          // Log Out Button
          <button
            onClick={handleLogOut}
            className="px-4 py-2 ml-4 border rounded-full bg-red-500 text-white"
          >
            Log Out
          </button>
        ) : (
          // Log In Button
          <button
            onClick={handleGoToLogIn}
            className="px-4 py-2 ml-4 border rounded-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white"
          >
            Log In
          </button>
        )}
      </div>
      {/* Logout Message */}
      {logoutMessage && (
        <div className="absolute top-16 right-4 bg-green-100 text-green-800 p-2 rounded shadow-lg">
          {logoutMessage}
        </div>
      )}
    </div>
  );
}
