import Link from "next/link";
import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiTiktokFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex gap-5 pr-4">
      <Link
        href="https://www.youtube.com/@sovannborithyun5205"
        className="text-primary text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiYoutubeFill />
      </Link>
      <Link
        href="https://www.facebook.com/sovannborith.yun/"
        className="text-[#4267B2] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiFacebookBoxFill />
      </Link>
      <Link
        href="https://www.tiktok.com/@sovannborith.yun"
        className="text-[#2af0ea] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiTiktokFill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sovannborith-yun-876980111/"
        className="text-[#0077B5] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default SocialIcons;
