import { GrSend } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ handleActiveLink }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtncgvs",
        "template_kq9xxyy",
        form.current,
        "N5nu6FfwhcgZXlEFd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setNameValue("");
    setEmailValue("");
    setNumberValue("");
    setMessageValue("");

    toast.success("Email sent successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleName = (e) => {
    e.preventDefault();
    setNameValue(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmailValue(e.target.value);
  };
  const handleNumber = (e) => {
    e.preventDefault();
    setNumberValue(e.target.value);
  };
  const handleMessage = (e) => {
    e.preventDefault();
    setMessageValue(e.target.value);
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      handleActiveLink(7);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      id="contact"
      className="bg-light py-16 flex flex-col items-center justify-center"
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
        className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053] mb-10"
      >
        Contact Me
      </motion.h1>
      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
        <div className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-3 items-end "
          >
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.15,
              }}
              className="flex items-start justify-center space-x-3 "
            >
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                className="w-[12rem] sm:w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="text"
                name="user_name"
                placeholder="Type your full name here"
                value={nameValue}
                onChange={handleName}
                required
              />
            </motion.div>
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.3,
              }}
              className="flex items-start justify-center space-x-3"
            >
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="user_email"
              >
                Email
              </label>
              <input
                className="w-[12rem] sm:w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="email"
                name="user_email"
                value={emailValue}
                onChange={handleEmail}
                placeholder="ex: hello@hello.ai"
                required
              />
            </motion.div>
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.45,
              }}
              className="flex items-start justify-center space-x-3"
            >
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="user_number"
              >
                Number
              </label>
              <input
                className="w-[12rem] sm:w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="tel"
                name="user_number"
                value={numberValue}
                onChange={handleNumber}
                pattern="[0-9]{10}"
                placeholder="ex: 0123456789"
                required
              />
            </motion.div>
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.6,
              }}
              className="flex items-start justify-center space-x-3"
            >
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-[12rem] sm:w-[20rem] h-28 py-3 resize-none outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="text"
                name="message"
                value={messageValue}
                onChange={handleMessage}
                placeholder="Type your full message here"
                required
              />
            </motion.div>
            <motion.button
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.6,
              }}
              type="submit"
              className="w-[12rem] sm:w-[20rem] h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out "
            >
              <GrSend className="mr-3 text-2xl" />
              Send Message
            </motion.button>
            <motion.p
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.6,
              }}
              className="text-xs text-center w-[12rem] sm:w-[20rem] px-5 text-[#95ADC7]"
            >
              For any enquaries, any suggestion, or appreciation you can send a
              message anytime
            </motion.p>
            <ToastContainer />
          </form>
        </div>
        <div className="max-w-[32rem] flex justify-between items-end lg:items-center flex-col">
          <div className="h-[20rem] w-[22rem] hidden lg:block">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", duration: 3, delay: 0.35 }}
              src="/img/contactImg.png"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row items-end lg:items-center justify-center space-y-5 lg:space-y-0 lg:space-x-5">
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.6,
              }}
              className=" flex flex-col items-center justify-center"
            >
              <button className="w-[12rem] sm:w-[20rem] lg:max-w-[11rem] px-5 h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out ">
                <IoCall className="mr-3 text-2xl" />
                +6297522799
              </button>
              <p className="w-[12rem]  lg:w-auto text-xs text-center px-5 mt-3 text-[#95ADC7]">
                Call any time from Mon-Fri for business enquiry
              </p>
            </motion.div>
            <motion.div
              initial={{ y: "5vh", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.6,
              }}
              className=" flex flex-col items-center justify-center"
            >
              <button className="w-[12rem] sm:w-[20rem] lg:w-auto px-5 h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out ">
                <HiOutlineMail className="mr-3 text-2xl" />
                nkrkamle@gmail.com
              </button>
              <p className="text-xs w-[12rem] sm:w-[20rem] text-center px-5 mt-3 text-[#95ADC7]">
                You can directly mail me any time from Mon-Fri for business
                enquiry
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
