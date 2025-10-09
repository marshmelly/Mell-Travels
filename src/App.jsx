import { useState } from 'react'
import { LoadingScreen } from './Components/LoadingScreen'
import './index.css'
import { Navbar } from './Components/Navbar';
import { MobileMenu } from './Components/MobileMenu';
import { Home } from './Components/Sections/Home';
import { Destinations } from './Components/Sections/Destinations';
import { Contact } from './Components/Sections/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700
                     ${isLoaded ? "opacity-100" : "opacity-0"} bg-floral-white`}>

       
      
     <BrowserRouter>
       
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

       <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/destination' element={<Destinations />} />
      </Routes>
     </BrowserRouter>
      </div>
    
    </>
  )
}

export default App
