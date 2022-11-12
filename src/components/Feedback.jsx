import { Link } from "react-router-dom";
import testimonials from "../collections/testimonials";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Feedback = ({ handleActiveLink, darkmode }) => {
  const [activeId, setActiveId] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const handleActiveId = (id) => {
    setActiveId(id);
  };
  useEffect(() => {
    if (inView) {
      handleActiveLink(6);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      id="feedback"
      className={`${
        darkmode ? "bg-dark" : "bg-light"
      } py-16 flex flex-col items-center justify-center`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.15,
        }}
        className={`${
          darkmode ? "text-dark" : "text-light"
        } text-center text-4xl font-HelveticaRoundedBold mb-10`}
      >
        Clients Feedback
      </motion.h1>
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
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.15,
                bounce: 0.5,
              }}
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
              className={`h-[4rem] w-[4rem] md:w-[8rem] md:h-[8rem] bg-gradient-to-b from-[#61D2FE] to-[#006EE5]  rounded-[50%] border-4
              ${
                darkmode
                  ? "shadow-neoDark border-[#001830]"
                  : "shadow-neo border-[#E9F2FB]"
              }
              cursor-pointer transition-all duration-200 ease-in-out`}
            >
              <img
                className="w-full h-full rounded-[50%]"
                src={imgUrl}
                alt=""
              />
            </motion.div>
          </div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
          className={`${
            darkmode
              ? "shadow-neoButtonDark border-[#001830]"
              : "shadow-neoButton border-[#E9F2FB]"
          }  h-[15rem] w-[15rem] md:w-[30rem] md:h-[30rem] gap-y-2 md:gap-y-3 lg:gap-y-10 flex flex-col items-center justify-center rounded-[50%] sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]`}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className={`h-[3rem] w-[3rem] lg:h-[5rem] lg:w-[5rem] rounded-[50%] border-4 ${
                darkmode ? "border-[#004895]" : "border-[#FFFFFF]"
              } mb-2`}
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
            <h1
              className={`${
                darkmode ? "text-dark" : "text-light"
              } md:text-lg font-HelveticaBold mb-1 `}
            >
              {testimonials[activeId - 1].name}
            </h1>
            <p className="text-xs md:text-sm text-[#95ADC7]">
              {testimonials[activeId - 1].profession}
            </p>
          </div>
        </motion.div>
      </div>
      <motion.button
        initial={{ y: "5vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          type: "spring",
          duration: 3,
          delay: 0.3,
        }}
        className={`${
          darkmode
            ? "text-dark shadow-neoButtonDark hover:shadow-neohoverDark active:shadow-neoInsetDark"
            : "text-light shadow-neoButton hover:shadow-neohover active:shadow-neoInset"
        } font-HelveticaRoundedBold  rounded-lg px-12 py-3 hover:scale-95 hover:text-[#006EE5] transition-all duration-100 ease-out`}
      >
        <Link to="">Show All</Link>
      </motion.button>
    </div>
  );
};

export default Feedback;
