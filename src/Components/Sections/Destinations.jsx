import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Local images

import Tokyo from "../Images/Tokyo.jpg";
import Rome from "../Images/ROme.jpg";
import Mombasa from "../Images/Mombasa.jpg";
import Nairobi from "../Images/Nairobi.jpeg";
import Sydney from "../Images/Sydney.jpeg";
import La from "../Images/Los Angeles.jpeg";
import Maldives from "../Images/Maldives.jpg";

// Destinations Data
const destinationsCards = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of lights and love, known for the Eiffel Tower and romantic charm.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River"],
  },
  {
    name: "Rome, Italy",
    image: Rome,
    description: "The eternal city with ancient ruins and stunning architecture.",
    highlights: ["Colosseum", "Trevi Fountain", "Vatican City"],
  },
  {
    name: "Nairobi, Kenya",
    image: Nairobi,
    description: "A vibrant city blending modern life with nature and wildlife.",
    highlights: ["Nairobi National Park", "Karen Blixen Museum", "Giraffe Centre"],
  },
  {
    name: "Sydney, Australia",
    image: Sydney,
    description: "A harbor city famous for the Sydney Opera House and beaches.",
    highlights: ["Bondi Beach", "Harbour Bridge", "Darling Harbour"],
  },
  {
    name: "Maldives",
    image: Maldives,
    description: "A tropical paradise with clear waters, coral reefs, and luxury resorts.",
    highlights: ["Snorkeling", "Water villas", "Sunset cruises"],
  },
  {
    name: "Los Angeles, USA",
    image: La,
    description: "The entertainment capital with Hollywood glam and sunny beaches.",
    highlights: ["Hollywood", "Santa Monica", "Beverly Hills"],
  },
  {
    name: "Tokyo, Japan",
    image: Tokyo,
    description: "A bustling metropolis blending tradition with cutting-edge technology.",
    highlights: ["Shibuya Crossing", "Tokyo Tower", "Temples"],
  },
  {
    name: "Mombasa, Kenya",
    image: Mombasa,
    description: "Historic coastal city with white-sand beaches and rich Swahili culture.",
    highlights: ["Fort Jesus", "Nyali Beach", "Old Town"],
  },
];

export const Destinations = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  const handleExplore = (city) => {
    setSelectedCity(city);
  };

  const handleClose = () => {
    setSelectedCity(null);
  };

  const handleBooking = () => {
    handleClose();
    navigate("/booking"); // redirect to booking section or route
  };

  return (
    <div>
      <section
        id="destination"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        {/* HERO SLIDER */}
        <div className="h-[90vh] w-full">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            loop={true}
            className="h-full"
          >
            {["https://images.unsplash.com/photo-1502602898657-3e91760cbb34", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"].map(
              (image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="bg-black/40 w-full h-full flex items-center justify-center">
                      <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Explore the World
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* TITLE */}
        <div className="text-center z-40 px-3 mt-6">
          <h1 className="text-xl text-white/90 md:text-6xl font-bold">
            Ready to Explore the World?
          </h1>
        </div>

        {/* DESTINATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {destinationsCards.map((city, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-65 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">{city.name}</h3>
                <button
                  onClick={() => handleExplore(city)}
                  className="mt-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-6 rounded-xl border border-black/30 hover:-translate-y-1 hover:border-orange-500/60
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Travel With Us?</h2>
            <ul className="">
              <li className="mb-2 text-gray-700">Expertly curated travel experiences.</li>
              <li className="mb-2 text-gray-700">Personalized itineraries to suit your preferences.</li>
              <li className="mb-2 text-gray-700">24/7 customer support during your trip.</li>
            </ul>
                        </div>

       <div className="p-6 rounded-xl border border-black/30 hover:-translate-y-1 hover:border-orange-500/60
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Where to go in 2026?</h2>
            <ul className="">
              <li className="mb-2 text-gray-700">Explore our sandy beaches in Mombasa and Maldives.</li>
              <li className="mb-2 text-gray-700">Personalized itineraries to suit your preferences.</li>
              <li className="mb-2 text-gray-700">24/7 customer support during your trip.</li>
            </ul>
        </div>

     <br />
      </div>
      </section>

      {/* POPUP MODAL */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>

            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              {selectedCity.name}
            </h2>
            <p className="text-gray-700 mb-3">{selectedCity.description}</p>

            <ul className="list-disc list-inside text-gray-600 mb-4">
              {selectedCity.highlights?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button
              onClick={handleBooking}
              className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Go to Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
