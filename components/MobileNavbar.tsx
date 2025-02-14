import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
interface Props {
    nav:boolean;
    closeNav: () => void;
}

const MobileNavbar = ({nav,closeNav}: Props) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
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
        closeNav();
      }
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div className={`fixed ${navAnimation}  transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
        
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <div className='nav-link-mobile'>
              {isHomePage ? (
                <span onClick={() => scrollToSection('top')}>Home</span>
              ) : (
                <Link href='/'>Home</Link>
              )
              }
            </div>
            <div className='nav-link-mobile'>
              {isHomePage ? (
                    <span onClick={() => scrollToSection('services')}>Services</span>
                  ) : (
                    <Link href= '/#services'>Services</Link>
                  )}
            </div>
            <div className='nav-link-mobile'><Link href='/projects'>Projects</Link></div>
            <div className='nav-link-mobile'><Link href='/about'>About</Link></div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('contact')}>Contact</div>
        </div>
        <div 
            onClick = {closeNav} 
            className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'
        >
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNavbar