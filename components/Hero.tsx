import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Files/Victor_Chhun_Resume_March2025.pdf"; // Replace with your file path
    link.download = "VictorChhun-CV.pdf"; // Desired filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="h-[100vh] bg-[url('/images/banner.jpg')] bg-cover bg-center "
      id="home"
    >
      <div className="h-[100%] w-[100%] absolute">
        <Particle />
      </div>
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div className="h-[50%] w-[100%] z-[100]">
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HELLO, I&apos;M <span className="text-yellow-400">VICTOR!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
            A highly motivated computer science graduate at the University of
            California, Irvine. I am constantly finding ways to improve my
            technical skills through school/personal projects.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              onClick={handleDownload}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] 
              text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items:center 
              space-x-2 cursor-pointer"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[480px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/profilepicture.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
