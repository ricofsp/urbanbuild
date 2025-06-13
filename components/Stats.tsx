"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

type statsItem = {
  endCountNum: number;
  endCountText: string;
  text: string;
};

const statsData: statsItem[] = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 800, endCountText: "+", text: "Successsful Projects" },
  { endCountNum: 32, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 26, endCountText: "+", text: "Years of Experience" },
];
const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="w-full py-10 mt-16 lg:mt-32 bg-primary">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 text-center text-white lg:flex-row lg:text-left">
          {statsData.map((stat, index) => {
            return (
              <div key={index} className="w-full">
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{stat.endCountText}</span>
                </div>
                <p>{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
