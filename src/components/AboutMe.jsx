import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutMe = ({ handleActiveLink, darkmode }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      handleActiveLink(3);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      id="aboutme"
      className={`${
        darkmode ? "bg-dark" : "bg-light"
      } py-16 flex flex-col lg:flex-row items-center justify-center gap-10`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", duration: 3, delay: 0.35 }}
        className={`${
          darkmode
            ? "bg-dark shadow-neoDark border-[#001830]"
            : "bg-light shadow-neo border-[#E9F2FB]"
        } rounded-xl max-h-[25rem] max-w-[22rem] border-8 overflow-hidden`}
      >
        <img
          className=" max-h-[15rem] max-w-[13rem] sm:max-h-[23rem]  sm:max-w-[20rem] hover:scale-[1.05]  rounded-xl transition-all duration-500"
          src="/img/profileAbout.jpg"
          alt=""
        />
      </motion.div>
      <div
        className={`${
          darkmode ? "text-dark" : "text-light"
        } text-sm lg:text-start w-auto lg:w-[38rem] px-10 sm:px-14 md:px-20 lg:px-0`}
      >
        <div className="pb-2">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
          initial={{ y: "5vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
          className="py-2 border-t-2 border-[#95ADC7] w-[12rem]"
        >
          <motion.p
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
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
          initial={{ y: "5vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.45,
          }}
          className="text-[#95ADC7]"
        >
          I am a fullstack JavaScript &#40;MERN&#41; developer. I've 2 years
          experience to work with React JS, Node JS and Tailwind CSS. I can
          build and fix or upgrade a fully responsive website.
        </motion.p>
        <div>
          <ul className="flex flex-wrap gap-y-5 gap-x-5 text-xs py-8">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.15,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>HTML</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>CSS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.25,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>JavaScript</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.3,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>React JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.35,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>Node JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.4,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>MongoDB</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.45,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>Express JS</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.5,
                delayChildren: 1,
              }}
              className={`${
                darkmode
                  ? " shadow-neoButtonDark hover:shadow-neoInsetButtonDark"
                  : " shadow-neoButton hover:shadow-neoInsetButton"
              } px-5 py-1 transition-all duration-100 delay-75 ease-out hover:text-[#006EE5] hover:scale-95 cursor-pointer rounded-full`}
            >
              <p>Tailwind CSS</p>
            </motion.li>
          </ul>
        </div>
        <motion.button
          initial={{ y: "5vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 1 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
        >
          <a
            className={`${
              darkmode
                ? "text-dark shadow-neoButtonDark hover:shadow-neohoverDark active:shadow-neoInsetDark"
                : "text-light shadow-neoButton hover:shadow-neohover active:shadow-neoInset"
            } rounded-lg px-5 py-3 hover:text-[#006EE5] transition-all duration-200 font-HelveticaRoundedBold`}
            href="/resume/NabankurKamle_Resume.pdf"
          >
            Download CV <FontAwesomeIcon className="ml-2" icon={faDownload} />
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default AboutMe;
