import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: "Phone",
      details: ["+49 30 230 52 001"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: "Email",
      details: ["info@beyondborders.com"],
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
      title: "Location",
      details: ["Friedrichstraße 68", "10117 Berlin, Germany"],
    },
    {
      icon: <FaClock className="text-2xl text-blue-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM"],
    },
  ];

  return (
    <div>
      <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-8">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We&apos;d love to hear from you! Please fill out the form below or use our contact information.
        </p>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-center">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Image - Updated classes */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1675154134079-4a71dd46635c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwYWdlbmN5fGVufDB8fDB8fHww"
              className="w-full h-full object-cover rounded-lg shadow-md"
              alt="Contact Us"
            />
          </div>

          {/* Contact Form - No changes needed here */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-5xl text-green-500 mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
                <p className="text-lg text-gray-700 text-center">
                  Your message has been sent successfully! We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input
                      id="firstName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      id="lastName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="tel"
                    placeholder="+49 30 0000000"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full 
                  bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]
                  hover:scale-105 duration-300 text-white"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
