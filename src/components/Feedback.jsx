import { Link } from "react-router-dom";
import testimonials from "../collections/testimonials";
import { useState } from "react";

const Feedback = () => {
  const [activeId, setActiveId] = useState(1);

  const handleActiveId = (id) => {
    setActiveId(id);
  };
  return (
    <div
      id="feedback"
      className="bg-light py-16 flex flex-col items-center justify-center"
    >
      <h1 className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053] mb-10">
        Clients Feedback
      </h1>
      <div className="w-auto h-auto lg:w-[60rem] md:h-[75rem] lg:max-h-[40rem] mb-10 flex sm:flex-row flex-wrap gap-28 lg:gap-x-52 items-center justify-center md:justify-between relative">
        {testimonials.map(({ id, imgUrl }) => (
          <div
            key={id}
            style={
              id === 3
                ? { justifyContent: "start" }
                : id === 4
                ? { justifyContent: "end" }
                : { justifyContent: "center" }
            }
            className="w-auto sm:w-[13rem] md:w-[25rem] lg:w-[45rem] xl:w-[40rem] px-1 inline-block sm:flex justify-center"
          >
            <div
              onClick={() => handleActiveId(id)}
              style={
                activeId === id
                  ? {
                      width: "6rem",
                      height: "6rem",
                      padding: "8px",
                      cursor: "default",
                    }
                  : {}
              }
              className="h-[4rem] w-[4rem] md:w-[8rem] md:h-[8rem] bg-gradient-to-b from-[#61D2FE] to-[#006EE5]  rounded-[50%] border-4 shadow-neo cursor-pointer transition-all duration-200 ease-in-out"
            >
              <img
                className="w-full h-full rounded-[50%]"
                src={imgUrl}
                alt=""
              />
            </div>
          </div>
        ))}
        <div className="shadow-neoButton h-[15rem] w-[15rem]    md:w-[30rem] md:h-[30rem] gap-y-2 md:gap-y-3 lg:gap-y-10 flex flex-col items-center justify-center rounded-[50%] sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="h-[3rem] w-[3rem] lg:h-[5rem] lg:w-[5rem] rounded-[50%] border-4 border-white mb-2"
              src={testimonials[activeId - 1].imgUrl}
              alt=""
            />
            <h1 className="text-[#006EE5] border-b border-[#006EE5] inline-block text-center font-HelveticaBold md:text-lg">
              TESTIMONIALS
            </h1>
          </div>
          <p className="text-xs md:text-sm w-[15rem]  md:w-[25rem] text-center text-[#95ADC7]">
            {testimonials[activeId - 1].message}
          </p>
          <div className="text-center">
            <h1 className=" md:text-lg font-HelveticaBold text-[#233053] mb-1 ">
              {testimonials[activeId - 1].name}
            </h1>
            <p className="text-xs md:text-sm text-[#95ADC7]">
              {testimonials[activeId - 1].profession}
            </p>
          </div>
        </div>
      </div>
      <button className="text-[#41507B] font-HelveticaRoundedBold  rounded-lg px-12 py-3 shadow-neoButton hover:shadow-neohover hover:scale-95 active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out">
        <Link to="">Show All</Link>
      </button>
    </div>
  );
};

export default Feedback;
