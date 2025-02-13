import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] b-[0.2rem] font-semibold text-white'>
                        Phone
                    </h1>
                    <p className='text-[14px] w-[90%] text-white opacity-60'>
                        +1(323)6212588 
                    </p>
                </div>
            </div>

            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] b-[0.2rem] font-semibold text-white'>
                        LinkedIn
                    </h1>
                    <p className='text-[14px] w-[90%] text-white opacity-60'>
                        VictorC
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] b-[0.2rem] font-semibold text-white'>
                        Github
                    </h1>
                    <p className='text-[14px] w-[90%] text-white opacity-60'>
                        AwesomlyC
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] b-[0.2rem] font-semibold text-white'>
                        Email Address
                    </h1>
                    <p className='text-[14px] w-[90%] text-white opacity-60'>
                        Victorchhun55@gmail.com
                    </p>
                </div>
            </div>

        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
                Victor Chhun 2025 | All Rights Reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[16px] text-white opacity-20'>Term & condition</p>
                <p className='text-[16px] text-white opacity-20'>Privacy</p>
                <p className='text-[16px] text-white opacity-20'>SiteMap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer