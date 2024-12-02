import { Routes, Route } from 'react-router-dom';
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./pages/Activities";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Resorts from './pages/Resorts';
import Deals from './pages/Deals';
import About from './pages/AboutUs';
import Contact from './components/Contact';
import Login from './components/LogIn';
import Favorites from './pages/Favorites';
import Cruises from './pages/Cruises';
import Excursions from './pages/Excursions';

import { FavoriteProvider } from './contexts/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Activities />
                <Booking />
                <Gallery />
              </>
            } />
            <Route path="/resorts" element={<Resorts />} />
            <Route path="/cruises" element={<Cruises />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </FavoriteProvider>
  );
}

export default App;