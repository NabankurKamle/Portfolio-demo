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
      <h1 className="text-center text-4xl font-GothamBold  text-[#233053] mb-10">
        Clients Feedback
      </h1>
      <div className="w-[60rem] h-[40rem] flex flex-wrap gap-32 items-center justify-center relative">
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
            className="w-[25rem] px-10 flex justify-center "
          >
            <div
              onClick={() => handleActiveId(id)}
              style={
                activeId === id
                  ? {
                      width: "10rem",
                      height: "10rem",
                      padding: "8px",
                      cursor: "default",
                    }
                  : {}
              }
              className="w-[8rem] h-[8rem] bg-gradient-to-b from-[#61D2FE] to-[#006EE5]  rounded-[50%] border-4 shadow-neo cursor-pointer transition-all duration-200 ease-in-out"
            >
              <img
                className="w-full h-full rounded-[50%]"
                src={imgUrl}
                alt=""
              />
            </div>
          </div>
        ))}
        <div className="shadow-neoButton w-[30rem] h-[30rem] gap-y-10 flex flex-col items-center justify-center rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="h-[5rem] w-[5rem] rounded-[50%] border-4 border-white mb-2"
              src={testimonials[activeId - 1].imgUrl}
              alt=""
            />
            <h1 className="text-[#006EE5] border-b border-[#006EE5] inline-block text-center font-GothamBold text-lg">
              TESTIMONIALS
            </h1>
          </div>
          <p className="text-sm w-[25rem] text-center text-[#95ADC7]">
            {testimonials[activeId - 1].message}
          </p>
          <div className="text-center">
            <h1 className=" text-lg font-GothamBold text-[#233053] mb-1 ">
              {testimonials[activeId - 1].name}
            </h1>
            <p className="text-sm text-[#95ADC7]">
              {testimonials[activeId - 1].profession}
            </p>
          </div>
        </div>
      </div>
      <button className="text-[#41507B] font-GothamBold  rounded-lg px-12 py-3 shadow-neoButton hover:shadow-neohover hover:scale-95 active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out">
        <Link to="">Show All</Link>
      </button>
    </div>
  );
};

export default Feedback;
