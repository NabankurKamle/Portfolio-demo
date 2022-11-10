import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="bg-light py-16 flex flex-col lg:flex-row items-center justify-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 3, delay: 0.35 }}
        className="shadow-neo rounded-xl max-h-[25rem] max-w-[22rem] border-8 border-[#E9F2FB] overflow-hidden bg-light"
      >
        <img
          className="max-h-[23rem] max-w-[20rem] hover:scale-[1.05]  rounded-xl transition-all duration-500"
          src="/img/profileAbout.jpg"
          alt=""
        />
      </motion.div>
      <div className="text-sm lg:text-start w-auto lg:w-[38rem] text-[#233053] px-10 sm:px-14 md:px-20 lg:px-0">
        <div className="pb-2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.15,
            }}
            className="text-3xl font-HelveticaRoundedBold  text-center lg:text-start mb-10 lg:mb-2"
          >
            About Me
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.15,
            }}
            className="font-HelveticaBold mb-1"
          >
            Nabankur Kamle
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.3,
            }}
            className=" text-[#006EE5]"
          >
            Full Stack Web Developer.React JS.Node JS.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: "5vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
          className="py-2 border-t-2 border-[#95ADC7] w-[12rem]"
        >
          <motion.p
            initial={{ y: "5vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.15,
            }}
            className="font-HelveticaBold"
          >
            Residence:
            <span className="ml-1 text-[#95ADC7] font-Helvetica">India</span>
          </motion.p>
          <motion.p
            initial={{ y: "5vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.3,
            }}
            className="font-HelveticaBold"
          >
            City:
            <span className="ml-1 text-[#95ADC7] font-Helvetica">Kolkata</span>
          </motion.p>
          <motion.p
            initial={{ y: "5vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.45,
            }}
            className="font-HelveticaBold"
          >
            Age:<span className="ml-1 text-[#95ADC7] font-Helvetica">20</span>
          </motion.p>
        </motion.div>
        <motion.p
          initial={{ y: "10vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.45,
          }}
          className="text-[#95ADC7]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex autem
          impedit fugiat vero, iste expedita maxime nam in sequi numquam
          tempore, dolores hic. Dolorem, excepturi.
        </motion.p>
        <div>
          <ul className="flex flex-wrap gap-y-5 gap-x-5 text-xs py-8">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.15,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>HTML</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>CSS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.25,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>JavaScript</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.3,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>React JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.35,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>Node JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.4,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>MongoDB</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.45,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>Express JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.5,
                delayChildren: 1,
              }}
              className="px-5 py-1 shadow-neoButton hover:shadow-neoInsetButton transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full"
            >
              <p>Tailwind CSS</p>
            </motion.li>
          </ul>
        </div>
        <motion.button
          initial={{ y: "5vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
        >
          <Link
            className={
              "text-[#41507B]  rounded-lg px-5 py-3 shadow-neoButton hover:shadow-neohover active:shadow-neoInset hover:text-[#006EE5] transition-all duration-200 font-HelveticaRoundedBold"
            }
            to=""
          >
            Download CV <FontAwesomeIcon className="ml-2" icon={faDownload} />
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default AboutMe;
