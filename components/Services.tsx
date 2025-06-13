"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "public/assets/variants";
import { useState } from "react";
import {
  PiPaintRollerFill,
  PiUserGearFill,
  PiWallFill,
  PiWrenchFill,
} from "react-icons/pi";
import Button from "./Button";
import Pretitle from "./Pretitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
};

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    Description:
      "We build with precision and inovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, out expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing and Roofing",
      "Interior and Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    Description:
      "Revitalizing spaces with modern designs and high-quality craftsmaship. Whether upgrading a home or remodeling an office, we bring fresh life to every projects.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    Description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    Description:
      "Providing expert guidance for construction and renovation projects. From planning and budgeting to compiance and sustainability, our consulting service ensure project success.",
    serviceList: [
      "Project Plans",
      "Consting",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section id="services" className="pt-16 lg:pt-16">
      <div className="container max-w-screen-xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <Pretitle text="Our Services" center />
          <h2 className="mb-3 h2">Solution We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored consturction solutions, from planning to
            completion, with a focus on quality and inovation.
          </p>
        </motion.div>

        {/* tab */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={setActiveTab}
            className="flex flex-col lg:flex-row gap-[30px]"
          >
            <TabsList
              className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-1 
            gap-[30px] rounded-none p-0 bg-transparent lg:w-[345px]"
            >
              {/* TabsTriger */}
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none lg:w-[345px]
              h-[100px] flex items-center relative shadow-custom p-0 outline-none "
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center 
                    absolute left-0 ${
                      activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-black"
                    }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div
                      className="text-base uppercase font-dmSans font-semibold tracking-[0.6px]
                  ml-16"
                    >
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tab content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => {
                return (
                  <TabsContent
                    key={item.name}
                    value={item.name}
                    className="m-0"
                  >
                    <motion.div
                      variants={fadeInVariant}
                      initial="hidden"
                      whileInView="show"
                      exit="hidden"
                      className="flex flex-col lg:flex-row gap-[30px]"
                    >
                      {/* img */}
                      <div className="flex lg:flex-col gap-5 lg:gap-[30px]">
                        {item.thumbs.map((thumb, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-[140px] lg:w-[200px]"
                            >
                              <Image
                                src={thumb.url}
                                alt={""}
                                width={200}
                                height={200}
                              />
                            </div>
                          );
                        })}
                      </div>
                      {/* text & btn */}
                      <div>
                        <h3 className="mb-6 h3">{item.title}</h3>
                        <p className="mb-6">{item.Description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-3 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="font-medium capatilize text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <Button text="Read More" />
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
