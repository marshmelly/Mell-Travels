import Safari from '../Images/Safari.jpeg'
import hero from '../Images/hero.jpeg'
import LA from '../Images/Los Angeles.jpeg'
import Paris from '../Images/Paris.jpeg'
import Singapore from '../Images/Singapore.jpeg'
import Nairobi from '../Images/Nairobi.jpeg'
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const images = [
    LA, Singapore, Paris, Nairobi
  ]

  
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
  }
];
  

    return(

     <section id="#home" className="min-h-screen flex items-center justify-center relative">
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[90vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${hero})`}}>
       <div className="text-center z-50 px-4">
         <h1 className="text-xl text-white/90 md:text-6xl font-bold">
             Ready to Explore the world
        </h1>
       </div>

        <div className="flex justify-center space-x-5">
          <a href="#" className="border border-black-400/70 text-white py-3 px-6 rounded font-medium transition-all overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_15px_rgba(255, 255, 255,0.2)]">
             View Destinations
          </a>
        </div>
   </div>

    <div className="px-4 flex items-center items-center justify-center">
    <h1 className="text-xl font-bold mb-8 text-center ">
        Take a Look
        <br /> <span>at our top  Popular Travels</span>
    </h1>
    </div>
      <div className="p2 m1 items-center grid md:grid-cols-4 gap-2">
       
       
  {destinations.map((dest) => (
    <div
      key={dest.id}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                 transition-all duration-300 transform hover:-translate-y-1 
                 border border-gray-100 w-full max-w-sm"
    >
      <img
        src={dest.image}
        alt={dest.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition transform duration-300"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <FaLocationPin className="text-red-400 text-xl mr-3" />
          <h3 className="text-xl font-semibold text-grey">
            {dest.title}
          </h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {dest.description}
        </p>
        <button
          className="inline-flex items-center text-blue-600 font-medium
                     hover:text-blue-800 transition-colors duration-300 group/link"
        >
          Learn More
          <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  ))}



      
    </div>
    
    
   

  </div>
   </section>
    )
}