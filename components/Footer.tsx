import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "public/assets/variants";
import {
  RiArrowRightUpLine,
  RiFacebookFill,
  RiInstagramFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const socials = [
  { icon: <RiFacebookFill />, path: "" },
  { icon: <RiInstagramFill />, path: "" },
  { icon: <RiYoutubeFill />, path: "" },
  { icon: <RiTwitterFill />, path: "" },
];
const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mt-16 lg:mt-32 bg-primary"
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="py-16 lg:pt-[70px] flex flex-col lg:flex-row gap-[60px] lg:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.svg" width={230} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="mb-10 text-white h4">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-xl text-accent" />
                <p>1250 BrickStone Ave, US</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-xl text-accent" />
                <p>081224883657</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-xl text-accent" />
                <p>ricopane1009@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* newslatter */}
          <div className="flex-1 text-border">
            <h4 className="mb-10 text-white h4">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter our email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="absolute flex items-center justify-center w-12 h-12 text-xl bg-accent right-2 top-2 bottom-2 text-primary group">
                <RiArrowRightUpLine className="transition-all duration-200 group-hover:rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container flex flex-col items-center justify-between max-w-screen-xl gap-6 py-12 mx-auto border-t lg:px-0 border-border/10 lg:flex-row">
        <p className="text-border">
          Copyright &copy; 2025 UrbanBuild. All rights reserved
        </p>
        <div className="flex items-center gap-[40px]">
          {socials.map((social, index) => {
            return (
              <Link
                href={social.path}
                key={index}
                className="text-[18px] transition-all text-white hover:text-white/70 hover:scale-110"
              >
                {social.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
