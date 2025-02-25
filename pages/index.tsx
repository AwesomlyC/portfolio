import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import React, { useState} from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      <div>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
