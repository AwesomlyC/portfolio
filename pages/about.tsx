import React, { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const About = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div>
      <MobileNavbar nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] text-white">
        <h1 className="heading">
          ABOUT <span className="text-yellow-400">ME</span>
        </h1>
        <section
          className="flex items-center justify-center 
          pt-[2rem] pb-[2rem]  w-[100%]"
        >
          <div className="space-y-6 text-left max-w-2xl">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              tempora nihil aliquid quis, eos perspiciatis numquam libero ad sit
              ea voluptas, nisi alias, magnam rem accusantium incidunt maxime
              assumenda temporibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nisi, temporibus animi, rem quaerat necessitatibus modi
              reprehenderit, quos velit deserunt assumenda sapiente. Quibusdam
              aspernatur eius omnis veniam tempora laboriosam ea.
            </p>
          </div>
        </section>
        <Skills />
        <div>
          <h1 className="heading">
            CONTACT <span className="text-yellow-400">ME</span>
          </h1>
          <section
            className="flex items-center justify-center 
          pt-[2rem] pb-[2rem]  w-[100%]"
          >
            <div className="space-y-6 text-left max-w-2xl">
              <p>
                Want to ask me a question or to just say hello? Feel free to
                reach me via email at{" "}
                <a
                  href="mailto:victorchhun55@gmail.com"
                  className="external-link text-blue-400"
                >
                  victorchhun55@gmail.com
                </a>
                . I&apos;d be delighted to hear from you!
              </p>
              <p>
                Additionally, you might find me on <a href="https://www.linkedin.com/in/victor-chhun123/"
                className='external-links text-blue-400'>
                  LinkedIn
                </a>{" "}
                or <a href="https://github.com/AwesomlyC/"
                className='external-links text-blue-400'>Github</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
