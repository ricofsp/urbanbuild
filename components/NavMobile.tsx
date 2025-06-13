"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMenu3Fill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contacts", path: "contacts" },
];

const socials = [
  { icon: <RiFacebookFill />, path: "" },
  { icon: <RiInstagramFill />, path: "" },
  { icon: <RiYoutubeFill />, path: "" },
  { icon: <RiTwitterFill />, path: "" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center text-3xl text-white"
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="text-white border-none bg-primary">
        <div className="flex flex-col items-center justify-between h-full pt-16 pb-8">
          <SheetHeader>
            <SheetTitle>
              {/* logo */}
              <div>
                <Link href="">
                  <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={230}
                    height={48}
                  />
                </Link>
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          {/* navbar */}
          <ul className="flex flex-col justify-center w-full gap-10 text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-dmSans font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    spy={true}
                    duration={500}
                    activeClass="text-accent"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)} // Close the menu on click
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* socials */}
          <div className="flex items-center gap-7">
            {socials.map((social, index) => {
              return (
                <Link
                  href={social.path}
                  key={index}
                  className="flex gap-6 text-xl text-white"
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
