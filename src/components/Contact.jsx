import { useState } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setFormSubmitted(true); // Set submission status to true
  };

  return (
    <div>
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      <div id="contact" className="max-w-[1140px] mt-[100px] m-auto w-full p-4 py-16">
        <h2 className="text-center text-gray-700 mb-10">Send us a message</h2>
        <p className="text-center text-gray-700 mb-10">We&apos;re standing by!</p>

        <div className="grid md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1552364708-8a19ac4e8923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBpc2xhbmQlMjBhZHZlbnR1cmV8ZW58MHx8MHx8fDI%3D"
            className="w-full md:h-full object-cover p-2 max-h-[700px] h-[200px]"
            alt="Contact Us"
          />
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
              <p className="text-lg text-gray-700 mt-4">
                Your message has been sent successfully! We’ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2">
                <input className="border m-2 p-2" type="text" placeholder="First" required />
                <input className="border m-2 p-2" type="text" placeholder="Last" required />
                <input className="border m-2 p-2" type="email" placeholder="Email" required />
                <input className="border m-2 p-2" type="tel" placeholder="Phone" required />
                
                <textarea
                  className="border col-span-2 m-2 p-2"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message here..."
                  required
                ></textarea>
                <button
                  type="submit"
                  className="col-span-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white mb-8"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
