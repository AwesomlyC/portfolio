import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolore animi ullam, adipisci, consequatur velit ratione harum fuga
              ex quibusdam debitis veniam, totam qui consectetur aliquid eius
              assumenda soluta obcaecati.
            </p>
          </div>
            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items:center space-x-2'>
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </button>
        </div>
        {/* Section to the right of about me */}
        <div> 
        </div>
      </div>
    </div>
  );
};

export default About;
