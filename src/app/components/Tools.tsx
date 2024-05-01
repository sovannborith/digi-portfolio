import React from "react";

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

  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-grayBgHover border-none">
          <CardHeader>
            <CardTitle className="text-primaryTextColor">
              Explore my stack
            </CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4"></CardContent>
        </Card>

        <Card className="bg-grayBgHover border-none">
          <CardHeader>
            <CardTitle className="text-primaryTextColor">
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

        {/* <div className="flex flex-col w-full gap-4">
          <h1 className="">Follow me on social media</h1>
          <Card className="p-4 flex flex-row items-center justify-center gap-x-5 w-full bg-grayBgHover border-none">
            {socials.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="bg-primaryBgColor p-3 rounded-sm hover:shadow-md"
              >
                <Image src={item.icon} alt={item.name} className="w-16 h-16" />
              </Link>
            ))}
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Tools;
