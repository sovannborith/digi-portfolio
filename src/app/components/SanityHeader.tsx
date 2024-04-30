import Link from "next/link";
import React from "react";
import logo from "../assets/user.jpg";
import Image from "next/image";
const SanityHeader = (props: any) => {
  return (
    <div className="max-padd-container">
      <div className="flexCenter">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] rounded-full"
            width={50}
          />
        </Link>
        {props.renderDefault(props)}
      </div>
    </div>
  );
};

export default SanityHeader;
