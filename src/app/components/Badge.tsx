"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa6";

interface Props {
  containerStyles?: string;
  icon?: JSX.Element;
  endCountNum?: number;
  endCountText?: string;
  badgeText?: string;
  reviewCount?: number;
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
        <div className="text-2xl text-primary dark:text-black">{icon}</div>
      )}
      {endCountNum && (
        <div className="flex flex-col">
          <div className="flexCenter gap-x-2">
            <div className="flex flex-row bold-24 leading-none text-primary dark:text-black">
              <CountUp end={endCountNum} duration={5} delay={1} />
              {endCountText}
            </div>
            <div className="leading-none medium-15 dark:text-black">
              {badgeText}
            </div>
          </div>
        </div>
      )}
      {reviewCount && (
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-1">
            <Image
              src={"/user.jpg"}
              alt=""
              height={35}
              width={35}
              className="rounded-full"
            />
            <div className="flex flex-col">
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
          </div>
          {/* Details */}
          <div className="">
            <h4 className="bold-15 my-2 text-black">Recent Review</h4>
            <div className="flex-col flex gap-3">
              <div className="flexCenter gap-x-2 text-black">
                <span className="bg-[#eaeaea] h-8 w-8 flexCenter rounded-full">
                  DD
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none">
                    Dayann Dith
                  </span>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor...</p>
                </div>
              </div>

              <div className="flexCenter gap-x-2 text-black">
                <span className="bg-[#eaeaea] h-8 w-8 flexCenter rounded-full">
                  SS
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none">
                    Keangsim Seng
                  </span>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Badge;
