/* eslint-disable no-unused-vars */
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Log In and Register

  // Handle Log In
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setLogoutMessage("");
    } catch (err) {
      setError("Failed to log in. Please check your email and password.");
    }
  };

  // Handle Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setIsRegistering(false); // Switch to logged-in state
      setError("");
    } catch (err) {
      setError("Failed to register. Please check your details and try again.");
    }
  };

  // Handle Log Out
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setLogoutMessage("You logged out successfully!");
    } catch (err) {
      setError("Failed to log out. Please try again.");
    }
  };

  return (
    <div>
 

      {/* Log In / Register Section */}
      <div className="max-w-[400px] m-auto mt-[300px] px-4 py-8 border rounded-lg shadow-lg text-center mb-[300px]">
        {isLoggedIn ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome!</h2>
            <p className="text-lg text-gray-600">You logged in successfully!</p>
            <p className="text-lg text-gray-600">It&apos;s time to explore!</p>
            <button
              onClick={handleLogOut}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            {logoutMessage && (
              <p className="text-green-600 text-lg font-medium mb-4">
                {logoutMessage}
              </p>
            )}
            {isRegistering ? (
              <form onSubmit={handleRegister}>
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Register</h2>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2 text-left" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2 text-left" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Register
                </button>
                <p
                  className="text-gray-600 mt-4 cursor-pointer hover:underline"
                  onClick={() => {
                    setIsRegistering(false);
                    setError("");
                  }}
                >
                  Already have an account? Log In
                </p>
              </form>
            ) : (
              <form onSubmit={handleLogIn}>
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Log In</h2>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2 text-left" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2 text-left" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Log In
                </button>
                <p
                  className="text-gray-600 mt-4 cursor-pointer hover:underline"
                  onClick={() => {
                    setIsRegistering(true);
                    setError("");
                  }}
                >
                  Don&apos;t have an account? Register
                </p>
              </form>
            )}
          </>
        )}
      </div>

 
    </div>
  );
}

export default LogIn;
