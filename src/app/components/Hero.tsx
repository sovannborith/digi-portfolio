import React from "react";
import { Button } from "../../components/ui/button";
import { MoveRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import { GiManualJuicer } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import Link from "next/link";
import me from "../../../public/user.jpg";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2 h-full bg-grayBgHover min-h-[400px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-3xl lg:text-4xl font-medium">
          Hey, I am Sovannborith Yun
        </h1>
        <h1 className="text-2xl lg:text-3xl font-normal mt-2 text-basedTextColor">
          I am a developer working and living in Cambodia 🏃‍♂️
        </h1>
        <h1 className="font-semibold">
          From Pixels to Perfection Exploring the Essence of Web/Mobile Design
          and Development.
        </h1>
        <p className="mt-2">
          Explore my portfolio where creativity and functionality converge,
          showcasing innovative web/mobile development projects crafted with
          precision and passion for digital excellence.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="mailto:yun.sovannborith@gmail.com">
            <Button className="gap-x-2 shadow-lg">
              Hire me <MoveRight size={20} />
            </Button>
          </a>
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
          >
            <Button className="shadow-lg bg-black hover:bg-[#222222]">
              Download CV
            </Button>
          </Link>
          {/* <a href="">
            <Button className="shadow-lg bg-black hover:bg-[#222222]">
              Download CV
            </Button>
          </a> */}
        </div>
        {/* <a
          href="mailto:jan@alenix.de"
          className="relative inline-block text-lg group mt-5"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in Touch!</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a> */}
      </div>
      <Image
        src={me}
        alt="Sovannborith"
        className="col-span-1 h-[400px] object-cover rounded-2xl bg-gray-100"
        priority
      />
    </div>
  );
  // return (
  //   <div className="flexCenter gap-24 flex-col md:flex-row">
  //     {/* Left */}
  //     <div className="flex flex-1 flex-col pt-12 xl:pt-32">
  //       <h1 className="h1 !font-extrabold">
  //         From Pixels to Perfection Exploring the Essence of Web/Mobile Design
  //         and Development
  //       </h1>
  //       <h1 className="text-4xl lg:text-6xl font-normal mt-3 ">
  //         I am a web developer working and living in Germany 🇩🇪
  //       </h1>
  //       <p>
  //         Explore my portfolio where creativity and functionality converge,
  //         showcasing innovative web/mobile development projects crafted with
  //         precision and passion for digital excellence.
  //       </p>
  //       <div className="mt-6 flex gap-4">
  //         <Button className="gap-x-2 shadow-lg">
  //           Hire me <MoveRight size={20} />
  //         </Button>
  //         <Button className="shadow-lg bg-black hover:bg-[#222222]">
  //           Download CV
  //         </Button>
  //       </div>
  //       <div className="mt-10">
  //         <SocialIcons />
  //       </div>
  //     </div>
  //     {/* Right */}
  //     <div className="relative flexCenter">
  //       <Image
  //         src={"/user.jpg"}
  //         alt="Hero"
  //         height={450}
  //         width={450}
  //         className="drop-shadow-sm rounded-full"
  //       />
  //     </div>
  //   </div>
  // );
};

export default Hero;
