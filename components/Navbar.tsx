import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react'

interface Props {
  openNav:() => void;
}


const Navbar = ({openNav}: Props) => {
  const scrollToSection = (idName: string) => {
    if (idName === 'top'){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      const targetElement = document.getElementById(idName);
      targetElement?.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold' onClick={() => scrollToSection('top')}>
                WEB
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link' onClick={() => scrollToSection('top')}>Home</div>
            {/* <div className='nav-link'>About</div> */}
            <div className='nav-link' onClick={() => scrollToSection('services')}>Services</div>
            <div className='nav-link' onClick={() => scrollToSection('projects')}>Projects</div>
            <div className='nav-link' onClick={() => scrollToSection('contact')}>Contact</div>
            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar