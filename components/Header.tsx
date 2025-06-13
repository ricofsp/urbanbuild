"use client";

import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import NavMobile from "./NavMobile";
const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contacts", path: "contacts" },
];
const Header = () => {
  return (
    <header className="py-4 bg-primary">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Link href="">
              <Image src="/assets/logo.svg" alt="" width={230} height={48} />
            </Link>
          </div>
          {/* navbar */}
          <nav className="items-center hidden gap-12 lg:flex">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm text-white uppercase font-dmSans font-medium 
                    tracking-[1.2px] after:content-['/'] last:after:content-none after:mx-4
                    after:text-accent hover:text-accent"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      activeClass="text-accent"
                      className="cursor-pointer"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            {/* btn */}
            <button className="w-[200px] h-[54px] min-w-[200px] flex items-center justify-between py-[5px] pl-[10px] pr-[5px] bg-white group">
              <div className="flex-1 text-center tracking-[1.2px] font-dmSans font-bold text-primary text-sm uppercase">
                Get a quote
              </div>
              <div className="flex items-center justify-center h-10 w-11 bg-primary">
                <RiArrowRightUpLine className="text-xl text-white transition-all duration-200 group-hover:rotate-45" />
              </div>
            </button>
          </nav>
          {/* nav mobile */}
          <div className="lg:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
