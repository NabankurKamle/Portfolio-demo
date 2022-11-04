import { useState } from "react";
import portfolios from "../collections/portfolios";
import { Link } from "react-router-dom";
import ProjectCard from "../common/ProjectCard";

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleActiveLink = (id) => {
    setActiveLink(id);
  };
  return (
    <div id="portfolio" className="bg-light py-16 flex flex-col items-center">
      <h1 className="text-[#006EE5] border-b border-[#006EE5] inline-block text-center font-GothamBold text-lg mb-10">
        PORTFOLIOS
      </h1>
      <div>
        <ul className="flex items-center justify-center rounded-lg shadow-neoButton gap-x-3">
          {portfolios.map(({ id, title }) => (
            <li
              key={id}
              onClick={() => handleActiveLink(id)}
              className={
                activeLink === id
                  ? "shadow-neoInsetButton transition-all ease-out duration-100 delay-75 px-10 py-3 rounded-lg  bg-light text-[#006EE5] text-sm"
                  : " px-10 py-3 rounded-lg transition-all ease-out duration-100 delay-75 bg-light text-[#41507B] hover:text-[#006EE5] hover:shadow-neoButton cursor-pointer text-sm"
              }
            >
              <Link to="">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 w-[64rem] flex flex-wrap gap-10 justify-center items-center">
        {portfolios[activeLink - 1].projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
