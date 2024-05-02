import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="flexCenter flex-col pb-5">
      {/* <NavBar
        containerStyles={"hidden md:flex gap-x-1 capitalize"}
        linkStyles={"relative"}
        underlineStyles={`absolute -z-10 left-0 top-full h-[2px] w-full bg-basedBgColor rounded-full`}
      /> */}
      <a href="mailto:yun.sovannborith@gmail.com" className="md:hidden">
        <Button className="gap-x-2 shadow-lg">
          Contact Me <MoveRight size={20} />
        </Button>
      </a>
      <p className="mt-5 text-[12px] text-secondaryTextColor">
        &copy; 2024 Sovannborith Yun. All Rights reserved.
      </p>
    </div>
  );
};

export default Footer;
Footer;
