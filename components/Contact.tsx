import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "public/assets/variants";
import {
  RiChat1Line,
  RiFacebookFill,
  RiInstagramFill,
  RiMapPin2Line,
  RiSmartphoneLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Form from "./Form";

const socials = [
  { icon: <RiFacebookFill />, path: "" },
  { icon: <RiInstagramFill />, path: "" },
  { icon: <RiYoutubeFill />, path: "" },
  { icon: <RiTwitterFill />, path: "" },
];
const Contact = () => {
  return (
    <section id="contacts" className="pt-16 lg:pt-32">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container max-w-screen-xl mx-auto"
      >
        <div
          className="w-full lg:h-[700px] shadow-custom p-4 lg:[p-8] lg:px-[90px] lg:py-[36px] 
        border-accent border-t-4"
        >
          <div className="flex flex-col lg:flex-row h-full lg:gap-[90px]">
            {/* info */}
            <div className="w-full lg:max-w-[380px] lg:pr-[70px] lg:border-r lg:border-border/40 h-[640px] border-b lg:bprder-b-0 mb-4 lg:mb-0">
              <h4 className="text-[26px] font-dmSans font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[20px]">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-dmSans leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-primary">
                      ricopane1009@gmail.com
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-dmSans leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office.</p>
                    <p className="font-semibold text-primary">
                      1250 Brickstone Ave, Dallas, TX 75201, USA
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-dmSans leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">081224883657</p>
                  </div>
                </div>
              </div>
              {/* Socials */}
              <div className="flex items-center mt-16 gap-[40px]">
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
            {/* form */}
            <div className="flex-1">
              <h2 className="mb-3 h2">Request a Quote</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam?
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
