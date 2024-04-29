import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import Badge from "./Badge";
import { GiManualJuicer } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="max-padd-container py-50 bg-[#fdf3fb] dark:bg-transparent">
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
        <div className="relative flexCenter">
          <Image
            src={"/user.jpg"}
            alt="Hero"
            height={450}
            width={450}
            className="drop-shadow-sm rounded-full"
          />
          <div className="absolute top-0 left-0 hidden xl:flex items-center justify-center w-full h-full">
            <Badge
              containerStyles={"absolute top-[50%] left-[2%]"}
              badgeText="Projects Completed"
              endCountNum={99}
              endCountText="k"
              icon={<GrProjects />}
            />
            <Badge
              containerStyles={"absolute -top-[10%] left-[45%]"}
              icon={<GiSkills />}
            />
            <Badge
              containerStyles={"absolute top-[50%] right-[2%]"}
              badgeText="Companies"
              endCountNum={3}
              icon={<GiManualJuicer />}
            />
            <Badge
              containerStyles={"absolute top-[80%] left-[30%]"}
              reviewCount={168}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
