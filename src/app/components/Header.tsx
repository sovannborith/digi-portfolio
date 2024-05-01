"use client";
import NavBar from "./NavBar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
        header ? "shadow-md" : ""
      } sticky top-0 py-1 z-30 transition-all max-padd-container flexBetween bg-primaryBgColor`}
    >
      {/* Logo */}
      <Logo />
      <div className="flexCenter gap-x-3">
        {/* Navbar */}
        <NavBar
          containerStyles={"hidden md:flex gap-x-1 capitalize"}
          linkStyles={"relative"}
          underlineStyles={`absolute -z-10 left-0 top-full h-[2px] w-full bg-basedBgColor rounded-full`}
        />
        <div className="">
          <Button
            variant="outline"
            className="hidden md:block border-basedBgColor hover:bg-basedBgColor hover:text-primaryBgColor transition-colors duration-500"
          >
            Contact Me
          </Button>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
