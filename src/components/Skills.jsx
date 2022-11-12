import skills from "../collections/skills";
import Skill from "../common/Skill";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = ({ handleActiveLink, darkmode }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      handleActiveLink(4);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      id="skills"
      className={`${
        darkmode ? "bg-dark" : "bg-light"
      } py-16 flex flex-col items-center justify-center`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.15,
        }}
        cla
        className={`text-center text-4xl font-HelveticaRoundedBold  ${
          darkmode ? "text-dark" : "text-light"
        } mb-10`}
      >
        Skills
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-8 max-w-[64rem]">
        {skills.map(({ title, knowledge }) => (
          <Skill
            key={title}
            title={title}
            knowledge={knowledge}
            darkmode={darkmode}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
