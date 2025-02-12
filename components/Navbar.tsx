import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react'

interface Props {
  openNav:() => void;
}


const Navbar = ({openNav}: Props) => {
  return (
    <div className="w-full sticky z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                WEB
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link text-white'>Home</div>
            <div className='nav-link text-white'>Projects</div>
            <div className='nav-link text-white'>About</div>
            <div className='nav-link text-white'>Contact</div>

            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>


        </div>
    </div>
  )
}

export default Navbar