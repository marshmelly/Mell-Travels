import hero from "../Images/About2.jpg";
import travel1 from "../Images/travel1.jpg";
import travel2 from "../Images/travel2.jpg";
import travel3 from "../Images/travel3.jpg";

export const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      {/* HERO SECTION */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[90vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="text-center z-10 px-4 flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-6xl font-bold text-white/90">
            Ready to Explore the World
          </h1>

          <div className="flex justify-center mt-6">
            <a
              href="#destinations"
              className="border border-white/70 text-white py-3 px-6 rounded font-medium transition-all overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_15px_rgba(255,255,255,0.2)]"
            >
              View Destinations
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION (with padding) */}
      <div className="py-16 px-6 lg:px-20">
        {/* ABOUT TEXT */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Mell’s Travels
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded by{" "}
            <span className="font-semibold text-gray-800">Melly in 2023</span>, 
            Mell’s Travels was born from a love of exploration and a desire to make traveling 
            simple, inspiring, and accessible to everyone. What began as a personal passion 
            project has grown into a trusted platform that connects adventurers and dreamers 
            worldwide.
          </p>
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={travel2}
              alt="Travel experience 1"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={travel1}
              alt="Travel experience 2"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={travel3}
              alt="Travel experience 3"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* WHAT WE OFFER */}
        <div className="max-w-5xl mx-auto space-y-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Personalized Travel Experiences",
                text: "Discover destinations that fit your budget and travel style — from relaxing getaways to adventurous escapes.",
              },
              {
                title: "Expert Destination Guides",
                text: "Access curated insights, local attractions, and hidden gems to make your trip memorable.",
              },
              {
                title: "Travel Tips & Resources",
                text: "From packing lists to visa information — get everything you need for smooth travel.",
              },
              {
                title: "Community & Inspiration",
                text: "Join a community of travelers sharing stories, advice, and inspiration for your next adventure.",
              },
              {
                title: "Sustainable Travel Commitment",
                text: "Explore responsibly with eco-friendly travel practices that protect our planet.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-lg mb-2 text-gray-700">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISION & MOTTO */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 mb-6">
            To become a global travel hub that encourages people to explore the world 
            with curiosity, respect, and a sense of adventure.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 italic">
            “Travel more. Worry less.”
          </h3>
        </div>
      </div>
    </section>
  );
};
