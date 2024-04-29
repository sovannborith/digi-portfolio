import Link from "next/link";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="bold-32 !font-extrabold">
      <Image
        src={logo}
        alt="Khmer Resort Logo"
        className="flex-1 w-[50px] rounded-full"
      />
    </Link>
  );
};

export default Logo;
