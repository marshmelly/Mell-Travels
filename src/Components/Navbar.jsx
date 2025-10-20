import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return(
         <nav className="fixed top-0 w-full z-40 bg-[rgba(105, 58, 2, 0.3)] backdrop-blur-lg
                         border-b border-black/20 shadow-lg">

                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">

                        <a href="#home" className="font-mono text-xl font-bold text-black">
                            Mell's <span className="text-color-#22333B-600">Travels</span>
                        </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                            onClick={() =>setMenuOpen((prev) => !prev)}>
                    &#9776;
                 </div>

                 <div className="hidden md:flex items-center space-x-6">

                    <a href="/home" className="text-chili-300 hover:text-mindaro transition-colors">
                        Home
                    </a>

                    <a href="/destination" className="text-chili-300 hover:text-mindaro transition-colors">
                       Destinations
                    </a>

                    <a href="/about" className="text-chili-300 hover:text-mindaro transition-colors">
                        About
                    </a>

                    <a href="/booking" className="text-chili-300 hover:text-mindaro transition-colors">
                       Bookings
                    </a>

                    <a href="/contact" className="text-chili-300 hover:text-mindaro transition-colors">
                         Contact
                    </a>
                    
                 </div>
                    </div>
                </div>            
        </nav>
    )
}