import Safari from '../Images/Safari.jpeg'
import hero from '../Images/hero.jpeg'

export const Home = () => {

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

    <div className="px-4 w-200">
    <h2 className="text-4-xl font-bold mb-8 text-center">
        Take a Look at 
    </h2>
   </div>

  </div>
   </section>
    )
}