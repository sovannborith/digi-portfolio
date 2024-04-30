"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "@/app/styles/mobile-menu.css";

import { IoHomeOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { GrUser } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";

import { LINKS } from "@/constant/link";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const icon = (link: string) => {
    if (link === "/") {
      return <IoHomeOutline className="icon" />;
    } else if (link === "/portfolio") {
      return <GrProjects className="icon" />;
    } else if (link === "/guestbook") {
      return <GrUser className="icon" />;
    } else if (link === "/admin") {
      return <RiAdminLine className="icon" />;
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);
  return (
    <div className="bg-transparent items-center justify-center md:hidden">
      <div
        className={`mobile-side-menu ${menuOpen === true ? "open-menu" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <div className={`sidebar  ${menuOpen === true ? "menu-open" : ""}`}>
        <nav className="flex flex-col">
          <ul className=" flex flex-col">
            {LINKS.map((link, i) => (
              <li
                aria-label={link.title}
                className={`navItem  pl-[10px] border-b-[1px] border-b-gray-200 ${
                  pathName === link.path
                    ? " text-[#026000] font-bold border-l-[5px] border-l-basedBgColor"
                    : // : link.link !== "/" && pathName.includes(link.link)
                      // ? " text-[#026000] font-bold border-l-[5px] border-l-basedBgColor"
                      ""
                }
            `}
                key={i}
              >
                <div className="navLink">
                  <Link
                    href={link?.path}
                    className={`flex flex-row items-center pt-[25px] pb-[25px] gap-[10px] text-[13px]  decoration-none bg-transparent  transition-all duration-300`}
                  >
                    {icon(link.path)}
                    <span className="capitalize">{link.title}</span>
                  </Link>
                </div>
              </li>
            ))}
            <li className="flext flext-1 w-full mb-[5px] px-[10px] self-end absolute bottom-[180px]">
              {/* <ClerkButton
                isSignedIn={isSignedIn}
                onClick={() => {
                  handleProfileClick();
                  setMenuOpen(false);
                }}
              /> */}
              <div
                className="w-full flexCenter p-5 bg-basedBgColor hover:bg-basedBgColor-hover text-primaryBgColor rounded-md cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
