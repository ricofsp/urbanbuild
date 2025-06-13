import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "public/assets/variants";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
const Testimonials = () => {
  return (
    <section className="pt-16 lg:pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <div className="relative flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-[484px] lg:pt-[54px] mb-12 lg:mb-0"
          >
            <Pretitle text="Testimonials" />
            <h2 className="h2">Built on Trust, Proven by Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we&apos;ve helped them
              bring their dreams to live with craftsmanshiip.
            </p>
            <Button text="Work with us" />
          </motion.div>
          {/* img & slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <div className="relative hidden lg:flex lg:w-[520px] lg:h-[530px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                alt=""
                className="object-cover"
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:absolute lg:bottom-0 lg:right-[160px] relative max-w-max
            bg-pink-200"
            >
              {/* quote icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                alt=""
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
