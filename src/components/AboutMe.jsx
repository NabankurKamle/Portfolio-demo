import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="bg-light py-16 flex items-center justify-center gap-10"
    >
      <div className="shadow-neo rounded-xl h-[25rem] w-[22rem] p-2 bg-light">
        <img className="h-full w-full" src="/img/profileAbout.jpg" alt="" />
      </div>
      <div className="text-sm w-[38rem] text-[#233053]">
        <div className="pb-2">
          <h1 className="text-3xl font-GothamBold mb-2">About Me</h1>
          <h3 className="font-GothamBold mb-1">Nabankur Kamle</h3>
          <p className=" text-[#006EE5]">
            Full Stack Web Developer.React JS.Node JS.
          </p>
        </div>
        <div className="py-2 border-t-2 border-[#95ADC7] w-[12rem]">
          <p className="font-GothamBold">
            Residence:
            <span className="ml-1 text-[#95ADC7] font-Gotham">India</span>
          </p>
          <p className="font-GothamBold">
            City:
            <span className="ml-1 text-[#95ADC7] font-Gotham">Kolkata</span>
          </p>
          <p className="font-GothamBold">
            Age:<span className="ml-1 text-[#95ADC7] font-Gotham">20</span>
          </p>
        </div>
        <p className="text-[#95ADC7]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex autem
          impedit fugiat vero, iste expedita maxime nam in sequi numquam
          tempore, dolores hic. Dolorem, excepturi.
        </p>
        <div>
          <ul className="flex flex-wrap gap-y-5 gap-x-5 text-xs py-8">
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              HTML
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              CSS
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              JavaScript
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              React JS
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              Node JS
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              MongoDB
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              Express JS
            </li>
            <li className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-110 cursor-pointer rounded-full">
              Tailwind CSS
            </li>
          </ul>
        </div>
        <button>
          <Link
            className={
              "text-[#41507B]  rounded-lg px-5 py-3 shadow-neoButton hover:shadow-neohover active:shadow-neoInset hover:text-[#006EE5] transition-all duration-200"
            }
            to=""
          >
            Download CV <FontAwesomeIcon className="ml-2" icon={faDownload} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
