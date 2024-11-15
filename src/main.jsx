import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Deals from "./components/Deals.jsx";
import Contact from "./components/Contact.jsx";
import LogIn from "./components/LogIn.jsx";
import Booking from "./components/Booking.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Travel-Agency-Web"> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  </BrowserRouter>
);
