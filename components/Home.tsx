import React from "react";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Footer from "./Footer";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="relative z-[20]">
        <Services />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
