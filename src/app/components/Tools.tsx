"use client";

import square from "../../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { TECHES } from "@/constant/tech";
import { SOCIALS } from "@/constant/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Tools = () => {
  const teches = TECHES;
  const socials = SOCIALS;

  const tools = Object.entries(teches);

  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-grayBgHover border-none">
          <CardHeader>
            <CardTitle className="text-primaryTextColor font-medium">
              Explore my tech stack
            </CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flexCenter flex-wrap gap-4">
            {/* Ai */}
            {tools.map((tech, index) => (
              <div
                key={index + tech[0]}
                className="flex flex-col justify-start bg-primaryBgColor p-4 w-full rounded-md"
              >
                <h2 className="capitalize font-semibold text-[16px] text-primaryTextColor">
                  {tech[0]}
                </h2>
                <div className="flex flex-row flex-wrap mt-3 gap-3">
                  {tech[1].map((tool, i) => (
                    <div className="group flex items-center justify-center p-2 rounded-md bg-secondaryBgColor hover:shadow-md transition-all duration-300">
                      <Image
                        src={tool}
                        alt=""
                        key={i}
                        className="w-[50px] h-[50px] object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-grayBgHover border-none">
          <CardHeader>
            <CardTitle className="text-primaryTextColor font-medium">
              Follow me on social media
            </CardTitle>
          </CardHeader>
          <CardContent className="flexCenter flex-wrap gap-4">
            {socials.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                target="_blank"
                className="group bg-primaryBgColor p-3 rounded-sm hover:shadow-lg transition-all duration-500"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tools;
