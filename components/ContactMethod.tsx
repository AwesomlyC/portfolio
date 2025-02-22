import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const ContactMethod = () => {
  const visitLinkedIn = () => {
    window.open("https://www.linkedin.com/in/victor-chhun123/", "_blank");
  };

  const visitGitHub = () => {
    window.open("https://github.com/AwesomlyC/", "_blank");
  };

  const mailToEmail = () => {
    window.location.href = "mailto:victorchhun55@gmail.com";
  };

  return (
    <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
      <div className="flex items-center space-x-6">
        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center 
                        justify-center rounded-full bg-[#55e6a5] 
                        hover:invert transition duration-700">
          <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] b-[0.2rem] font-semibold text-white">
            Phone
          </h1>
          <p className="text-[14px] w-[90%] text-white opacity-60">
            +1(323)6212588
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div
          onClick={() => visitLinkedIn()}
          className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex 
                            items-center justify-center rounded-full bg-[#55e6a5] cursor-pointer
                            hover:invert transition duration-700"
        >
          <FaLinkedin className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] b-[0.2rem] font-semibold text-white">
            LinkedIn
          </h1>
          <p className="text-[14px] w-[90%] text-white opacity-60">VictorC</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div
          onClick={() => visitGitHub()}
          className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex 
                items-center justify-center rounded-full bg-[#55e6a5] cursor-pointer
                hover:invert transition duration-700"
        >
          <FaGithub className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] b-[0.2rem] font-semibold text-white">
            Github
          </h1>
          <p className="text-[14px] w-[90%] text-white opacity-60">AwesomlyC</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div
          onClick={() => mailToEmail()}
          className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex 
                items-center justify-center rounded-full bg-[#55e6a5] cursor-pointer
                hover:invert transition duration-700"
        >
          <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] b-[0.2rem] font-semibold text-white">
            Email Address
          </h1>
          <p className="text-[14px] w-[90%] text-white opacity-60 break-all">
            Victorchhun55@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMethod;
