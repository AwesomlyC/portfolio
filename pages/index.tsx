import Hero from '@/components/Hero';
import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import React, {useState} from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);


  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar section web/mobile */}
        <MobileNavbar nav={nav} closeNav={closeNav}/>
        <Navbar openNav = {openNav}/>
        {/* Hero Section */}
        <Hero />
      </div>
     
      
      </div>
  )
}

export default HomePage;