const ProjectCard = ({ project }) => {
  return (
    <div className="w-[12rem] p-2 pb-5 h-[20rem] overflow-hidden flex flex-col text-center justify-between cursor-pointer rounded-xl shadow-neo hover:shadow-neohover hover:scale-105 hover:translate-y-2 active:shadow-neoInsetButton transition-all duration-200 ease-out">
      <div className="w-full ">
        <img
          className="w-full h-[10rem] rounded-xl"
          src={project.imgUrl}
          alt=""
        />
      </div>
      <div className="text-sm text-[#233053]">
        <h3 className="mb-6 text-lg">{project.title}</h3>
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          className="text-[#95ADC7] overflow-hidden"
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
