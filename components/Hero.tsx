import { motion } from "framer-motion";
import { fadeIn } from "public/assets/variants";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-cover bg-center bg-no-repeat">
      {/* overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/0 via-black/50 to-black/70"></div>
      <div className="container flex items-center h-full max-w-screen-xl mx-auto">
        <div
          className="z-20 max-w-[680px] text-center lg:text-left items-center lg:items-start
        flex flex-col mx-auto xl:mx-0"
        >
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="text-white h1"
          >
            <span className="text-accent">Building </span>robust lasting
            solution
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="text-white mb-9"
          >
            From concept to completion, we ensure every details is oprimized for
            strengt and endurance, creating solutions that inspire confidence
            and stand firm for years
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="See our work" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
