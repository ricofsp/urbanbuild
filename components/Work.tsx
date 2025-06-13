import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "public/assets/variants";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Pretitle from "./Pretitle";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Your short description",
    href: "",
  },
];

const Work = () => {
  return (
    <div id="projects" className="pt-16 lg:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto lg:mb-10"
        >
          <Pretitle text="Our work" center />
          <h2 className="mb-3 h2">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation
            in every projects we undertake
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {workData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[492px] relative
            overflow-hidden group flex justify-center flex-1"
              >
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover cursor-pointer"
                />
                <div
                  className="w-[90%] h-[84px] bg-primary absolute bottom-4
                flex justify-between items-center text-white md:translate-y-[108px] 
                md:group-hover:translate-y-0 transition-all duration-500"
                >
                  <div className="pl-8">
                    <h4
                      className="text-white font-primary font-semibold tracking-[1px]
                    uppercase"
                    >
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <RiCheckboxCircleFill className="text-xl text-accent" />
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <Link
                    href={item.href}
                    className="w-[44px] lg:w-[55px] lg:h-[50px] h-[44px]
                      bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
                  >
                    <RiArrowRightUpLine />
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
