import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flexCenter flex-col pb-5">
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
