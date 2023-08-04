import { useState } from "react";
import portfolios from "../collections/portfolios";
import { Link } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Portfolio = ({ handleActiveLink, darkmode }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [activePLink, setactivePLink] = useState(1);

  const handleactivePLink = (id) => {
    setactivePLink(id);
  };
  useEffect(() => {
    if (inView) {
      handleActiveLink(5);
    }
  }, [inView, handleActiveLink]);
  return (
    <div
      ref={ref}
      id="portfolio"
      className={`${
        darkmode ? "bg-dark" : "bg-light"
      } py-16 flex flex-col items-center`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.1,
        }}
        className="text-[#006EE5] border-b border-[#006EE5] inline-block text-center font-HelveticaBold text-lg mb-10"
      >
        PORTFOLIOS
      </motion.h1>
      <div>
        <ul
          className={`${
            darkmode ? "shadow-neoButtonDark" : "shadow-neoButton"
          } flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-center justify-center rounded-lg sm:gap-x-3`}
        >
          {portfolios.map(({ id, title }) => (
            <li
              key={id}
              onClick={() => handleactivePLink(id)}
              className={
                activePLink === id
                  ? `${
                      darkmode
                        ? "shadow-neoInsetButtonDark bg-dark"
                        : "shadow-neoInsetButton bg-light"
                    } transition-all ease-out duration-200 delay-75 px-10 py-3 rounded-lg text-[#006EE5] text-sm`
                  : `${
                      darkmode
                        ? "hover:shadow-neoButtonDark text-dark bg-dark"
                        : "hover:shadow-neoButton text-light bg-light"
                    } px-10 py-3 rounded-lg transition-all ease-out duration-200 delay-75 hover:text-[#006EE5] cursor-pointer text-sm`
              }
            >
              <Link to="">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 w-auto lg:w-[64rem] flex flex-wrap gap-10 justify-center items-center">
        {portfolios[activePLink - 1].projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkmode={darkmode} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
