import Beach from '../Images/Beach.jpeg';

export const Destinations = () => {

    return(
        <div>
            <section id="destination" className="min-h-screen flex fle-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[90vh] bg-cover bg-center flex items-center justify-center"
                     style={{ backgroundImage: `url(${Beach})`}}>
                        <div className="text-center z-40 px-3">
                             <h1 className="text-xl text-white/90 md:text-6xl font-bold">
                                 Ready to Explore the world
                              </h1>
                        </div>
                     </div>
            </section>
        </div>
    )
}