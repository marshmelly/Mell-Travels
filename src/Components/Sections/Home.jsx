import Safari from '../Images/Safari.jpeg'
import Peacock from '../Images/Peacock.jpeg'
import hero from '../Images/hero.jpeg'
import LA from '../Images/Los Angeles.jpeg'
import Paris from '../Images/Paris.jpeg'
import Singapore from '../Images/Singapore.jpeg'
import Nairobi from '../Images/Nairobi.jpeg'
import Sydney from '../Images/Sydney.jpeg'
import Tokyo from '../Images/Tokyo.jpeg'
import Rome from '../Images/Rome.jpeg'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { useState } from 'react'

export const Home = () => {
  const images = [LA, Singapore, Paris, Nairobi, Sydney, Tokyo, Rome]

  const destinations = [
    {
      id: 1,
      title: "Los Angeles",
      image: images[0],
      description: "Hollywood glamour, sunny beaches, vibrant culture, endless city adventures."
    },
    {
      id: 2,
      title: "Singapore",
      image: images[1],
      description: "Modern skyline, lush gardens, diverse culture, food paradise, adventure."
    },
    {
      id: 3,
      title: "Paris",
      image: images[2],
      description: "City of love and lights, art, fashion, cuisine, romance, timeless elegance."
    },
    {
      id: 4,
      title: "Nairobi",
      image: images[3],
      description: "Safari capital, vibrant culture, modern city, wildlife, adventure awaits."
    },
    {
      id: 5,
      title: "Tokyo",
      image: images[5],
      description: "Futuristic skyline, traditions, temples, cuisine, anime, and neon nights."
    },
    {
      id: 6,
      title: "Rome",
      image: images[6],
      description: "Ancient ruins, Vatican, piazzas, cuisine, fountains, and timeless history."
    },
    {
      id: 7,
      title: "Sydney",
      image: images [4],
      description: "Iconic Opera House, stunning harbor, beaches, vibrant culture, outdoor adventures.",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 6 // default for desktop

  const prevCards = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? destinations.length - itemsPerPage
        : prev - itemsPerPage
    )
  }

  const nextCards = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= destinations.length
        ? 0
        : prev + itemsPerPage
    )
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Hero section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="text-center z-50 px-4">
          <h1 className="text-xl text-white/90 md:text-6xl font-bold">
            Ready to Explore the world
          </h1>
        </div>

        <div className="flex justify-center space-x-5">
          <a
            href="#destinations"
            className="border border-black-400/70 text-white py-3 px-6 rounded font-medium transition-all overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_15px_rgba(255,255,255,0.2)]"
          >
            View Destinations
          </a>
        </div>
      </div>

      {/* Destinations Carousel */}
      <div className="px-3 flex flex-col items-center justify-center w-full max-w-6xl mt-9" id="destinations">
        <h1 className="text-xl font-bold mb-8 text-center">
          Take a Look
          <br /> <span>at our Top Popular Travels</span>
        </h1>

<div className="relative w-full p-0.5">
  <div className="overflow-hidden">
    <div
      className="flex gap-2 transition-transform duration-500"
      style={{
        transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
        width: `${(destinations.length / itemsPerPage) * 100}%`
      }}
    >
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1 
                    border border-gray-100 w-1/4 flex-shrink-0"
        >
          <img
            src={dest.image}
            alt={dest.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition transform duration-300"
          />
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FaLocationPin className="text-red-400 text-xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-700">
                {dest.title}
              </h3>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              {dest.description}
            </p>
            <button
              className="inline-flex items-center text-blue-600 font-medium
                        hover:text-blue-800 transition-colors duration-300 group/link"
            >
              Learn More
              <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 justify-end transition-transform duration-200" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Controls */}
  <button
    onClick={prevCards}
    className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-14 bg-gray-800 text-white p-3 rounded-full"
  >
    <FaArrowLeft />
  </button>
  <button
    onClick={nextCards}
    className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-14 bg-gray-800 text-white p-3 rounded-full"
  >
    <FaArrowRight />
  </button>
</div>

      </div>

      {/* Safari section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[90vh] bg-cover bg-center flex items-center justify-center mt-16"
        style={{ backgroundImage: `url(${Safari})` }}
      >
        <h2 className="text-black font-bold md:text-7xl py-3">
          Enjoy a Sunset With the Wild
        </h2>

        <p className="text-black font-bold md:text-7xl py-3">
          With Some Of Our Finest Destinations
        </p>
      </div>

      <div
       className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[90vh] bg-cover bg-center flex items-center justify-center mt-16"
       style={{backgroundImage: `url(${Peacock})`}}>
        <h2 className="text-white font-bold md:text-7xl py-3">
          SUbscribe to our Newsletter
        </h2>

        <div className="">
          
        <input type="text" placeholder='Subscribe' className='bg-white rounded py-5 px-4 items-start justify-center' />
         <br />  <br />
        <button type='submit' className='border rounded text-3xl bg-blue font-medium transition-all overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_15px_rgba(255,255,255,0.2)]'> Subscribe</button>    
        </div>
          
       </div>
    </section>
  )
}
