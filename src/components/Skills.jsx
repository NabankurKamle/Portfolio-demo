import skills from "../collections/skills";
import Skill from "../common/Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-light py-16 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.15,
        }}
        cla
        className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053] mb-10"
      >
        Skills
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-8 max-w-[64rem]">
        {skills.map(({ title, knowledge }) => (
          <Skill key={title} title={title} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
