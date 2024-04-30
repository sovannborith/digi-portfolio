import Link from "next/link";
import logo from "@/app/assets/user.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="!font-extrabold">
      {/* <Image
        src={logo}
        alt="Khmer Resort Logo"
        className="flex-1 w-[50px] rounded-full"
      /> */}
      <span className="text-3xl font-semibold">
        Yun <span className="text-basedTextColor">Sovannborith</span>
      </span>
    </Link>
  );
};

export default Logo;
