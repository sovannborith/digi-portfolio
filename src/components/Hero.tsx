import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import Badge from "./Badge";
import { FaAngular } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent">
      <div className="flexCenter gap-24 flex-col md:flex-row">
        {/* Left */}
        <div className="flex flex-1 flex-col pt-12 xl:pt-32">
          <h1 className="h1 !font-extrabold">
            From Pixels to Perfection Exploring the Essence of Web/Mobile Design
            and Development
          </h1>
          <p>
            Explore my portfolio where creativity and functionality converge,
            showcasing innovative web/mobile development projects crafted with
            precision and passion for digital excellence.
          </p>
          <div className="mt-6 flex gap-4">
            <Button className="gap-x-2 shadow-lg">
              Hire me <MoveRight size={20} />
            </Button>
            <Button className="shadow-lg bg-black hover:bg-[#222222]">
              Download CV
            </Button>
          </div>
          <div className="mt-10">
            <SocialIcons />
          </div>
        </div>
        {/* Right */}
        <div className="justify-center">
          <div>
            <Image
              src={"/user.jpg"}
              alt="Hero"
              height={450}
              width={450}
              className="drop-shadow-sm rounded-full"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles={"absolute top-[60%] justify-center"}
              icon={<FaAngular />}
              badgeText="Project Completed"
              endCountNum={15}
              endCountText="k"
              reviewCount={168}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
