import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMailFill,
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
const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 lg:h-14 lg-py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="items-center hidden gap-3 lg:flex">
            {/* phone */}
            <div className="flex items-center justify-center w-8 h-8 text-white bg-primary">
              <RiPhoneFill />
            </div>
            <p className="font-medium text-primary">+6281224883657</p>
            {/* email */}
            <div className="flex items-center justify-center w-8 h-8 text-white bg-primary">
              <RiMailFill />
            </div>
            <p className="font-medium text-primary">ricopane1009@gmail.com</p>
          </div>
          {/* socials */}
          <div className="flex items-center gap-7">
            {socials.map((social, index) => {
              return (
                <Link
                  href={social.path}
                  key={index}
                  className="text-[18px] transition-all text-primary hover:text-primary/70 hover:scale-110"
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
