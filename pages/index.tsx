import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, {useState} from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);


  return (
    <div className=''>
      <div>
        {/* Navbar section web/mobile */}
        <MobileNavbar nav={nav} closeNav={closeNav}/>
        <Navbar openNav = {openNav}/>

        <Hero />
        <div className='relative z-[20]'>
          {/* <About /> */}
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
     
      
      </div>
  )
}

export default HomePage;