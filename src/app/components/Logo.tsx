import Link from "next/link";
import logo from "@/app/assets/user.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="font-semibold">
      {/* <Image
        src={logo}
        alt="Khmer Resort Logo"
        className="flex-1 w-[50px] rounded-full"
      /> */}
      <span className="flexCenter text-3xl  bg-grayBgHover rounded-full h-[60px] w-[60px] hover:bg-primary/15 transition-colors duration-500">
        Y<span className="text-basedTextColor">S</span>
      </span>
    </Link>
  );
};

export default Logo;
