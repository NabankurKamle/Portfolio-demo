import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPeopleGroup,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { SiTailwindcss, SiRedux } from "react-icons/si";

const Achivements = () => {
  return (
    <div
      id="achivments"
      className="bg-light py-16 flex flex-col md:flex-row items-center justify-center lg:gap-x-36 gap-y-10 md:gap-y-0"
    >
      <div className="max-w-[27rem] text-center md:text-start px-5 md:px-0">
        <h1 className="text-[#006EE5] border-b border-[#006EE5] inline-block font-HelveticaBold text-lg mb-3">
          ACHIVMENTS
        </h1>
        <p className="text-[#233053] text-3xl font-HelveticaRoundedBold mb-10">
          I've been fortunateto work with and for people from some{" "}
          <span className="text-[#006EE5]">amazing organisation</span>
        </p>
        <div className="text-start">
          <div className="flex gap-10 items-start justify-center mb-3 py-2 rounded-2xl hover:shadow-neoButton hover:scale-105 transition-all duration-100 ease-out">
            <div className="min-h-[60px] min-w-[70px] shadow-neo rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                className="text-2xl text-[#233053]"
                icon={faLaptopCode}
              />
            </div>
            <div className="">
              <h1 className="text-[#233053] text-3xl font-HelveticaRoundedBold mb-3">
                2+
              </h1>
              <p className="text-sm text-[#95ADC7]">
                2+ years of experience as a full stack web developer with
                javascript.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start justify-center mb-3 py-2 rounded-2xl hover:shadow-neoButton hover:scale-105 transition-all duration-100 ease-out">
            <div className="min-h-[60px] min-w-[70px] shadow-neo rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                className="text-2xl text-[#233053]"
                icon={faPeopleGroup}
              />
            </div>
            <div className="">
              <h1 className="text-[#233053] text-3xl font-HelveticaRoundedBold mb-3">
                50+
              </h1>
              <p className="text-sm text-[#95ADC7]">
                Happy customers worldwide, working with 100%client satisfaction
                gurenttee!
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start justify-center mb-3 py-2 rounded-2xl hover:shadow-neoButton hover:scale-105 transition-all duration-100 ease-out">
            <div className="min-h-[60px] min-w-[70px]  shadow-neo rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                className="text-2xl text-[#233053]"
                icon={faAward}
              />
            </div>
            <div className="">
              <h1 className="text-[#233053] text-3xl font-HelveticaRoundedBold mb-3">
                5+
              </h1>
              <p className="text-sm text-[#95ADC7]">
                Honors and awards of national and international field.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[30rem] max-h-[30rem] flex items-center justify-center gap-36 relative">
        <div className=" flex flex-col gap-10">
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[5rem] h-[5rem] flex items-center justify-center rounded-[50%] relative left-20 sm:left-10 ">
            <SiTailwindcss className="text-4xl text-[#38BDF8]" />
          </div>
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] relative sm:left-0 left-10">
            <SiRedux className="text-2xl text-[#764ABC]" />
          </div>
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[7rem] h-[7rem] flex items-center justify-center rounded-[50%] relative top-5 left-10 sm:top-10 sm:left-5">
            <FontAwesomeIcon
              className="text-6xl text-[#3c873a]"
              icon={faNode}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] relative right-12 top-5 sm:top-0 sm:right-10">
            <FontAwesomeIcon
              className="text-2xl text-[#e34c26]"
              icon={faHtml5}
            />
          </div>
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[4rem] h-[4rem] flex items-center justify-center rounded-[50%] relative right-2 sm:-right-10">
            <FontAwesomeIcon
              className="text-3xl text-[#264de4]"
              icon={faCss3Alt}
            />
          </div>
          <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[5rem] h-[5rem] flex items-center justify-center rounded-[50%] relative right-10 sm:top-5 sm:right-5">
            <FontAwesomeIcon
              className="text-4xl text-[#f0db4f]"
              icon={faSquareJs}
            />
          </div>
        </div>
        <div className="shadow-neoButton hover:shadow-neoInsetButton hover:scale-95 transition-all duration-100 ease-out w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] gap-y-2 flex flex-col items-center justify-center rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <FontAwesomeIcon
            className="text-4xl lg:text-6xl text-[#00d8ff]"
            icon={faReact}
          />
          <p className="text-xl text-center font-HelveticaRoundedBold text-[#00d8ff]">
            React JS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
