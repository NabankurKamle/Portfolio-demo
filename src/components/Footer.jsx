import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer" className="px-10 sm:px-20 bg-light pb-10 pt-24">
      <div className=" bg-light w-[100%] shadow-neo rounded-lg flex  flex-col text-center py-12 justify-start md:px20 lg:px-40">
        <h1 className="text-center text-4xl font-HelveticaRoundedBold  text-[#233053]  my-2">
          Briliant solution for your ideas
        </h1>
        <p className="text-[#233052] text-sm">
          Build modern websites fast and impressive in reasonable price
        </p>
        <div className="border-t border-[#233053] mt-10 pt-10 flex flex-wrap sm:space-x-5 items-start justify-center xl:justify-between px-20">
          <div className="mb-5">
            <h3 className="font-HelveticaRoundedBold text-[#233053] text-lg mb-6">
              Connet with me
            </h3>
            <ul className="flex items-center sm:space-y-0 sm:space-x-3">
              <li className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#0165E1]">
                <Link to="">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#bc2a8d]">
                <Link to="">
                  <BsInstagram />
                </Link>
              </li>
              <li className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#0A66C2]">
                <Link to="">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-lg sm:text-2xl p-2 sm:p-3 hover:shadow-neoInsetButton transition-all duration-300 hover:scale-90 ease-in-out rounded-md hover:text-[#F1502F]">
                <Link to="">
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 items-center sm:items-start justify-center sm:space-x-20">
            <div className="text-center sm:text-start text-[#233053]">
              <h3 className="font-HelveticaRoundedBold text-lg mb-6">
                How I works
              </h3>
              <p className="text-xs leading-4">
                Experts and Al
                <br />
                Get a custom Draft
                <br />
                Personalize and launch
                <br />
                Receive a monthly
                <br />
                Report
              </p>
            </div>
            <div className="text-center sm:text-start text-[#233053]">
              <h3 className="font-HelveticaRoundedBold text-lg mb-6">
                Pricing
              </h3>
              <p className="text-xs mb-1">Send Message</p>
              <p className="text-xs mb-1">Send Mail</p>
              <p className="text-xs">Phone Call</p>
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
