
export const Footer = () => {

    return(
      <footer className="w-full z-40 bg-gradient-to-r from-orange-300 via-[#88304E] to-amber-500 border-b border-black/20">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          <h2 className="text-2xl font-bold text-white">
            &copy; Mell's Travel
          </h2>

          <p className="mt-3 text-sm text-grey-400">
            Explore the world with comfort, style and unforgettable experience.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 flex items-center justify-center px-4 pb-6 gap-7">
          {/*Quick Links*/}
        <div className="">
          <h2 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3">
            <li>
              <a href="/destinations" className="hover:text-gray">Destinations</a>
            </li>
             <li>
              <a href="booking" className="hover:text-orange">Bookings</a>
            </li>
             <li>
              <a href="/about" className="hover:text-orange">About Us</a>
            </li>
             <li>
              <a href="/contact" className="hover:text-orange">Contact</a>
            </li>
          </ul>
        </div>

        {/*Support*/}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Support
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-blue">
                FAQs
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400">Nairobi, Kenya</p>
          <p className="text-sm text-gray-400">Email: info@mellstravels.com</p>
          <p className="text-sm text-gray-400">Phone: +254 700 123 456</p>


 {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
     
      </div>

      
  {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mell's Travels. All rights reserved.
      </div>
      </footer>
    )
}