import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "public/assets/variants";
import Button from "./Button";
import Pretitle from "./Pretitle";
const About = () => {
  return (
    <div id="about" className="pt-16 lg:pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:gap-0 lg:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="mb-6 h2">
                Focused on Excellence In Every Project
              </h2>
              <p className="mb-11">
                Our unwearing commitment to excellence drives every project we
                undetake. From concept to completion, we meticulously craft
                solution that embody quality and, precision and innovation.
              </p>
              <div className="flex flex-col mb-10 text-right w-max">
                <Image
                  src="/assets/img/about/signature.svg"
                  alt=""
                  width={154}
                  height={38}
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 lg:flex lg:justify-center"
          >
            <div className="lg:max-w-[444px] lg:h-[493px] relative">
              {/* bg */}
              <div className="hidden lg:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10" />
              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={493}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
