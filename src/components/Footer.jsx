import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="footer" className="px-10 sm:px-20 bg-light pb-10 pt-24">
      <div className=" bg-light w-[100%] shadow-neo rounded-lg flex  flex-col text-center py-12 justify-start md:px20 lg:px-40">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
          className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053]  my-2"
        >
          Briliant solution for your ideas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.15,
          }}
          className="text-[#233052] text-sm"
        >
          Build modern websites fast and impressive in reasonable price
        </motion.p>
        <div className="border-t border-[#233053] mt-10 pt-10 flex flex-wrap sm:space-x-5 items-start justify-center xl:justify-between px-20">
          <div className="mb-5">
            <motion.h3
              initial={{ y: "5vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.15,
              }}
              className="font-HelveticaRoundedBold text-[#233053] text-lg mb-6"
            >
              Connet with me
            </motion.h3>
            <ul className="flex items-center sm:space-y-0 sm:space-x-3">
              <motion.li
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.15,
                }}
                className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#0165E1]"
              >
                <Link to="">
                  <FaFacebookF />
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.3,
                }}
                className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#bc2a8d]"
              >
                <Link to="">
                  <BsInstagram />
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.45,
                }}
                className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#0A66C2]"
              >
                <Link to="">
                  <FaLinkedinIn />
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.6,
                }}
                className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#F1502F]"
              >
                <Link to="">
                  <BsGithub />
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 items-center sm:items-start justify-center sm:space-x-20">
            <div className="text-center sm:text-start text-[#233053]">
              <motion.h3
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.15,
                }}
                className="font-HelveticaRoundedBold text-lg mb-6"
              >
                How I works
              </motion.h3>
              <motion.p
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.3,
                }}
                className="text-xs leading-4"
              >
                Experts and Al
                <br />
                Get a custom Draft
                <br />
                Personalize and launch
                <br />
                Receive a monthly
                <br />
                Report
              </motion.p>
            </div>
            <div className="text-center sm:text-start text-[#233053]">
              <motion.h3
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.15,
                }}
                className="font-HelveticaRoundedBold text-lg mb-6"
              >
                Pricing
              </motion.h3>
              <motion.p
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.3,
                }}
                className="text-xs mb-1"
              >
                Send Message
              </motion.p>
              <motion.p
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.3,
                }}
                className="text-xs mb-1"
              >
                Send Mail
              </motion.p>
              <motion.p
                initial={{ y: "5vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  delay: 0.3,
                }}
                className="text-xs"
              >
                Phone Call
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-lg mt-10 text-[#95ADC7]">
          &copy; 2022 ANKUR. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
