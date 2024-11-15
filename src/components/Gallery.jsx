import { useState } from "react";

function Gallery() {
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1568684333866-b89af98d349e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJvcGljYWwlMjBpc2xhbmQlMjBhZHZlbnR1cmV8ZW58MHx8MHx8fDI%3D"
  );

  const images = [
    "https://images.unsplash.com/photo-1622396481237-fbafd2ed6a6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRyb3BpY2FsJTIwdHJhdmVsc3xlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1494947356691-434358cea5a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHx0cm9waWNhbCUyMHRyYXZlbHN8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1708853163089-1de267014d43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHx0cm9waWNhbCUyMHRyYXZlbHN8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1646947012016-8b4123aae5f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Fzc2VyJTIwZmFocnpldWd8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1656542332925-6a75f6fa6a4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYWN0aXZpdGllc3xlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1676968181140-2bc4b1ece0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYSUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1514544118868-6c89a78379bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlYSUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDI%3D"

    
  ];

  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4 gap-y-1">
        {/* Large main image */}
        <div className="sm:col-span-4 row-span-6">
          <img className="w-full h-[500px] object-cover" src={mainImage} alt="Main" />
        </div>

        {/* Smaller images on the right */}
        <div className="flex flex-col gap-4">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} onClick={() => setMainImage(image)}>
              <img
                className="w-full h-[150px] object-cover cursor-pointer hover:opacity-75 transition"
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Smaller images below the main image */}
        <div className="sm:col-span-5 flex gap-4">
          {images.slice(2).map((image, index) => (
            <div key={index} onClick={() => setMainImage(image)} className="w-1/3">
              <img
                className="w-full h-[150px] object-cover cursor-pointer hover:opacity-75 transition"
                src={image}
                alt={`Thumbnail ${index + 3}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

