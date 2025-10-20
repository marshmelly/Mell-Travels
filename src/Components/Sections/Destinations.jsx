import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Local image
import Beach from "../Images/Beach.jpeg";

// External image URLs
const images = [
  Beach,
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Paris
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"  // Maldives
];

export const Destinations = () => {
  return (
    <div>
      <section
        id="destination"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <div className="h-[90vh] w-full">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            loop={true}
            className="h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Overlay */}
                  <div className="bg-black/40 w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                      Explore the World
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center z-40 px-3 mt-6">
          <h1 className="text-xl text-white/90 md:text-6xl font-bold">
            Ready to Explore the world
          </h1>
        </div>
      </section>
    </div>
  );
};
