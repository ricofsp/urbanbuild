import { motion } from "framer-motion";
import { fadeIn } from "public/assets/variants";
import FaqItem from "./FaqItem";
import Pretitle from "./Pretitle";

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "Do I need permits for my project?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "What materials do you use?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "Can i make changes after construction starts?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "How much will my construction project cost?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description: "Timelines vary based on project size and complexity",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};
const Faq = () => {
  return (
    <section className="pt-16 lg:pt-32">
      <div className="container max-w-screen-xl mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto lg:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="mb-3 h2">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisious.
          </p>
        </motion.div>
        {/* faq items */}
        <div>
          <ul className="flex flex-col w-full">
            {faqItemsData.map((item, index) => {
              return (
                <motion.li
                  variants={faqItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={index}
                  key={index}
                >
                  <FaqItem title={item.title} description={item.description} />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
