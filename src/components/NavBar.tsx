import { LINKS } from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const NavBar = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {LINKS?.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          className={`${linkStyles} ${link.path === path ? " bold-16" : ""}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            ></motion.span>
          )}
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
