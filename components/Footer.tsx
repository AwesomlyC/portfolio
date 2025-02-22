import React from "react";
import ContactMethod from "./ContactMethod";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const scrollToSection = (idName: string) => {
    if (idName === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.getElementById(idName);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="contact">
      <ContactMethod />
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-80 break-words w-[75%]">
          Victor Chhun 2025 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10 cursor-pointer flex-wrap opacity-80">
          <p className="nav-link !block">
            {isHomePage ? (
              <span onClick={() => scrollToSection("top")}>Home</span>
            ) : (
              <Link href="/">Home</Link>
            )}
          </p>
          <p className="nav-link !block">
            {isHomePage ? (
              <span onClick={() => scrollToSection("services")}>Services</span>
            ) : (
              <Link href="/#services">Services</Link>
            )}
          </p>
          <p className="nav-link !block">
            <Link href="/projects">Projects</Link>
          </p>
          <p className="nav-link !block">
            <Link href="/about">About</Link>
          </p>
          <p
            className="nav-link !block"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
