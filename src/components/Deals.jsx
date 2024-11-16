import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

function Deals() {
  const deals = [
    {
      title: "Paradise Escape to Bali",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFsaSUyMGlzbGFuZHN8ZW58MHx8MHx8fDI%3D",
      price: "€799",
      dates: "Available: Jan 5 - Jan 12, 2025",
      description: "7 nights in Bali with luxury villas, guided tours, and daily breakfast."
    },
    {
      title: "Dreamy Maldives Getaway",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      price: "€695",
      dates: "Available: Feb 15 - Feb 22, 2025",
      description: "Stay 7 nights in an overwater villa with beach access and water activities."
    },
    {
      title: "Caribbean Bliss in Aruba",
      image: "https://images.unsplash.com/photo-1625487328546-4b9fc4eeab1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXJ1YmF8ZW58MHx8MHx8fDI%3D",
      price: "€849",
      dates: "Available: Mar 10 - Mar 17, 2025",
      description: "Relax on Aruba’s beaches for 7 nights with all-inclusive meals and entertainment."
    },
    {
      title: "Tropical Retreat in Seychelles",
      image: "https://images.unsplash.com/photo-1506405211174-1c41d7bc9ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNleWNoZWxsZXN8ZW58MHx8MHx8fDI%3D",
      price: "€985",
      dates: "Available: Apr 20 - Apr 27, 2025",
      description: "Enjoy 7 nights in a luxury resort with private beaches and spa services."
    },
    {
      title: "Cultural Escape to Mauritius",
      image: "https://images.unsplash.com/photo-1537640685236-a9df2496e232?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWF1cml0aXVzfGVufDB8fDB8fHwy",
      price: "€999",
      dates: "Available: May 5 - May 12, 2025",
      description: "Discover Mauritius with 7 nights in beachfront hotels, tours, and meals included."
    },
    {
      title: "Hawaiian Adventure in Maui",
      image: "https://images.unsplash.com/photo-1547537069-537b37a02069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fE1hdWl8ZW58MHx8MHx8fDI%3D",
      price: "€549",
      dates: "Available: Jun 1 - Jun 8, 2025",
      description: "Explore Maui with 7 nights in resorts, hiking tours, and breathtaking beaches."
    },
  ];

  return (
    <div>
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      {/* Deals Section */}
      <div className="max-w-[1140px] m-auto w-full px-4 py-16">
        <h2 className="text-center text-4xl font-bold text-gray-700 mb-8">Hot Deals</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src={deal.image}
                alt={deal.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{deal.title}</h3>
                <p className="text-gray-600 mt-2">{deal.description}</p>
                <p className="text-gray-500 mt-2">{deal.dates}</p>
                <p className="text-green-600 font-bold text-lg mt-4">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Deals;
