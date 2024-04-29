"use client";
import NavBar from "./NavBar";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState<boolean>(false);

  function handleWindowScroll() {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  }

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  });

  return (
    <header
      className={`${
        header ? "shadow-md dark:!bg-secondary" : ""
      } sticky top-0 py-2 z-30 transition-all max-padd-container flexBetween bg-[#fdf3fb] dark:bg-gransparent`}
    >
      {/* Logo */}
      <Logo />
      <div className="flexCenter gap-x-3">
        {/* Navbar */}
        <NavBar
          containerStyles={"hidden md:flex gap-x-5 capitalize"}
          linkStyles={"relative"}
          underlineStyles={
            "absolute left-0 top-full h-[2px] w-full bg-primary rounded-full"
          }
        />
        {/* ThemeToggler */}
        <ThemeToggler />
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
