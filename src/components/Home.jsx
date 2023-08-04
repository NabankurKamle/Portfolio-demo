import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = ({ handleActiveLink, darkmode }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      handleActiveLink(1);
    }
  }, [inView, handleActiveLink]);
  return (
    <div
      ref={ref}
      id="home"
      className={`${
        darkmode ? "bg-dark" : "bg-light"
      } px-5 md:px-20 py-10 sm:py-24`}
    >
      <div
        className={`w-[100%] ${
          darkmode ? "shadow-insetDark bg-dark" : "shadow-inset bg-light"
        } rounded-lg flex flex-col md:flex-row items-center justify-between px-10 lg:px-0 lg:justify-center gap-y-10 xl:gap-40`}
      >
        <div className=" md:w-[20rem] lg:min-w-[30rem] pt-5 md:pt-0 text-center md:text-start">
          <motion.h1
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ type: "spring", duration: 1, delay: 0.1 }}
            style={{ wordSpacing: "-3px" }}
            className="text-5xl font-HelveticaRoundedBold
            bg-gradient-to-b from-[#61D2FE] to-[#006EE5] text-transparent bg-clip-text
            tracking-tighter py-3"
          >
            Discover my Amazing Work Projects
          </motion.h1>
          <motion.p
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.15 }}
            className={`text-xs ${
              darkmode ? "text-dark" : "text-light"
            } my-4 mb-8 font-HelveticaRoundedBold`}
          >
            &lt;<span className="text-sm text-[#006EE5]">code</span>&gt; WEB
            DEVELOPER &lt;/
            <span className="text-sm text-[#006EE5]">code</span>&gt;
          </motion.p>
          <motion.button
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className={` font-HelveticaRoundedBold ${
              darkmode
                ? "shadow-neoButtonDark hover:shadow-neohoverDark active:shadow-neoInsetDark text-dark"
                : "shadow-neoButton hover:shadow-neohover active:shadow-neoInset text-light"
            } rounded-lg px-5 py-3 hover:scale-105  hover:text-[#006EE5] transition-all duration-200 ease-out`}
          >
            <Link to="">EXPLORE NOW</Link>
          </motion.button>
        </div>
        <div className="min-h-[22rem] w-[16rem] sm:w-[19rem] relative overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", duration: 1, delay: 0.15 }}
            src="/img/profilemain.png"
            alt=""
            className=" absolute bottom-0 z-20 object-cover sm:h-full h-[90%]"
          />
          {/* <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 3, delay: 0.05 }}
            className="opacity-60 z-10 absolute bottom-0 left-4 w-[14rem] h-[20rem]"
            src="/img/bgHomeImg.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
