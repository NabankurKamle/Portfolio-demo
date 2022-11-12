import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Skill = ({ title, knowledge, darkmode }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=" w-[20rem]  lg:w-[32rem] flex items-center justify-between px-2 sm:px-0">
      <h3 className="text-sm text-[#006EE5]">{title}</h3>

      <div className="flex items-center">
        <div
          className={`${
            darkmode ? "shadow-neoInsetButtonDark" : "shadow-neoInsetButton"
          } h-[12px] px-[4px]  w-[8rem] lg:w-[20rem] rounded-full bg-transparent relative flex items-center mr-5`}
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: `calc(${knowledge}% - 8px)`, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.3,
              bounce: 0.3,
            }}
            style={{ width: `calc(${knowledge}% - 8px)` }}
            className="h-[7px] bg-gradient-to-r from-[#61D2FE] to-[#006EE5] rounded-full"
          ></motion.div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <p className="text-sm text-[#95ADC7] mr-10">
            {counterOn && <CountUp end={knowledge} delay={0.3} duration={3} />}%
          </p>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Skill;
