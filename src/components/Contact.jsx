import { GrSend } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-light py-16 flex flex-col items-center justify-center"
    >
      <h1 className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053] mb-10">
        Contact Me
      </h1>
      <div className="flex space-x-5">
        <div className="">
          <form action="contact" className="flex flex-col space-y-3 items-end ">
            <div className="flex items-start justify-center space-x-3 ">
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="text"
                name="name"
                placeholder="Type your full name here"
              />
            </div>
            <div className="flex items-start justify-center space-x-3">
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="email"
                name="email"
                placeholder="ex: hello@hello.ai"
              />
            </div>
            <div className="flex items-start justify-center space-x-3">
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="number"
              >
                Number
              </label>
              <input
                className="w-[20rem] h-14 outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="tel"
                name="number"
                pattern="[0-9]{10}"
                placeholder="ex: 0123456789"
              />
            </div>
            <div className="flex items-start justify-center space-x-3">
              <label
                className="mt-1 font-HelveticaRoundedBold text-[#006EE5]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-[20rem] h-28 py-3 resize-none outline-none bg-transparent shadow-insetInput text-[#233053] rounded-md px-5 placeholder:text-sm placeholder:opacity-70 placeholder:text-[#95ADC7]"
                type="text"
                name="message"
                placeholder="Type your full message here"
              />
            </div>
            <button className="w-[20rem] h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out ">
              <GrSend className="mr-3 text-2xl" />
              Send Message
            </button>
            <p className="text-xs text-center w-[20rem] px-5 text-[#95ADC7]">
              For any enquaries, any suggestion, or appreciation you can send a
              message anytime
            </p>
          </form>
        </div>
        <div className="max-w-[32rem] flex justify-between items-center flex-col">
          <div className="h-[20rem] w-[22rem]">
            <img src="/img/contactImg.png" alt="" />
          </div>
          <div className="flex items-center justify-center space-x-5">
            <div className="flex flex-col items-center justify-center">
              <button className=" px-5 h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out ">
                <IoCall className="mr-3 text-2xl" />
                +6297522799
              </button>
              <p className="text-xs text-center px-5 mt-3 text-[#95ADC7]">
                Call any time from Mon-Fri for business enquiry
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className=" px-5 h-14 font-HelveticaRoundedBold flex items-center justify-center text-center text-[#233053] shadow-neoButton hover:shadow-neohover hover:scale-95 rounded-lg active:shadow-neoInset hover:text-[#006EE5] transition-all duration-100 ease-out ">
                <HiOutlineMail className="mr-3 text-2xl" />
                nabankurkamle@gmail.com
              </button>
              <p className="text-xs text-center px-5 mt-3 text-[#95ADC7]">
                You can directly mail me any time from Mon-Fri for business
                enquiry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
