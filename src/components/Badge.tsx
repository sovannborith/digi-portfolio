"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa6";

interface Props {
  containerStyles: string;
  icon: JSX.Element;
  endCountNum: number;
  endCountText: string;
  badgeText: string;
  reviewCount: number;
}

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
  reviewCount,
}: Props) => {
  return (
    <div className={`${containerStyles} badge`}>
      {icon && (
        <div className="text-3xl text-primary dark:text-black">{icon}</div>
      )}
      {endCountText && (
        <div className="flex flex-col">
          <div className="flexCenter gap-x-2">
            <div className="bold-36 leading-none text-primarydark:text-black">
              <CountUp end={endCountNum} duration={5} delay={1} />
              {endCountText}
            </div>
            <div className="max-w-[77px] leading-none medium-15 dark:text-black">
              {badgeText}
            </div>
          </div>
        </div>
      )}
      {reviewCount && (
        <div className="flex gap-x-4">
          <Image
            src={"/user.jpg"}
            alt=""
            height={41}
            width={41}
            className="rounded-full"
          />
          <span className="bold-15 text-black">Sovannborith Yun</span>
          <span className="flexCenter text-xs text-primary dark:text-black">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-black pl-1">
              (
              <CountUp end={reviewCount} duration={4} delay={1} />)
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Badge;
