import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import React, { useState} from "react";
import Head from 'next/head';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      <div>
        <Head>
          <title> VicSite</title>
          <meta 
            name= "description" 
            content = {`Victor Chhun is a full-stack developer with experience in building modern web applications.
            Check out his work in software development by viewing his portfolio.`}
          />
        </Head>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
