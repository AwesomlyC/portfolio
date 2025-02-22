import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
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
    <div className="fixed top-[0] z-[1000] w-[100%] backdrop-blur-xl h-[8vh] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1
          className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold"
          onClick={() => scrollToSection("top")}
        >
          Vic
          <span className="text-yellow-300">Site</span>
        </h1>
        <p className="nav-link">
          {isHomePage ? (
            <span onClick={() => scrollToSection("top")}>Home</span>
          ) : (
            <Link href="/">Home</Link>
          )}
        </p>
        <p className="nav-link">
          {isHomePage ? (
            <span onClick={() => scrollToSection("services")}>Services</span>
          ) : (
            <Link href="/#services">Services</Link>
          )}
        </p>
        <p className="nav-link">
          <Link href="/projects">Projects</Link>
        </p>
        <p className="nav-link">
          <Link href="/about">About</Link>
        </p>
        <p className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </p>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
