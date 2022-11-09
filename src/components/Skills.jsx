import skills from "../collections/skills";
import Skill from "../common/Skill";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-light py-16 flex flex-col items-center justify-center"
    >
      <h1 className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053] mb-10">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-8 max-w-[64rem]">
        {skills.map(({ title, knowledge }) => (
          <Skill key={title} title={title} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
