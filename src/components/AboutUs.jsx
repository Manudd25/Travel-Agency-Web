import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div>
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      {/* About Us Content */}
      <div className="max-w-[1140px] m-auto mt-[100px] w-full px-4 py-16">
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-10">About Us</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-lg text-gray-600 leading-8 mb-4">
              Welcome to Beyond Borders! We are a travel agency dedicated to helping you explore the world&apos;s most beautiful and unique destinations. Our mission is to provide unforgettable travel experiences by offering customized itineraries, expert guidance, and personal touches.
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-4">
              Whether you are looking for a relaxing beach getaway, an adventurous trek through the mountains, or a cultural exploration of exotic cities, we’ve got you covered. We believe in creating meaningful travel experiences that inspire, refresh, and connect you with the world.
            </p>
            <p className="text-lg text-gray-600 leading-8">
              Join us on a journey to go beyond the borders and discover the extraordinary. Our team of passionate travel experts is here to make your dream vacation a reality.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1512757776214-26d36777b513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGFnZW5jeSUyMHRyb3BpY2FsfGVufDB8fDB8fHwy"
              alt="Beautiful scenic travel destination"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
