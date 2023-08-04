import links from "../collections/navLinks";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";
import { ImSwitch } from "react-icons/im";

const Navbar = ({
  handleActiveLink,
  activeLink,
  handleDarkMode,
  darkmode,
  handleShowMenu,
  showMenu,
}) => {
  return (
    <div
      style={!showMenu ? { overflow: "hidden" } : { overflow: "visible" }}
      className={`w-[100vw] md:fixed ${
        darkmode ? "bg-dark" : "bg-light"
      } z-[10000] overflow-hidden relative`}
    >
      <div onClick={() => handleShowMenu()} className="md:hidden pl-5 pt-5">
        {showMenu ? (
          <IoClose
            className={`${darkmode ? "text-dark" : "text-light"} text-xl`}
          />
        ) : (
          <IoMenu
            className={`${darkmode ? "text-dark" : "text-light"} text-xl`}
          />
        )}
      </div>
      <div
        style={!showMenu ? { right: "-100vw" } : { right: "0px" }}
        className={`md:static absolute transition-all duration-300 ease-out ${
          darkmode ? "bg-dark" : "bg-light"
        } w-full top-10 `}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center py-8 space-y-10 md:space-y-0 md:space-x-4 sm:flex z-20">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className={
                  activeLink === link.id
                    ? ` transition-all ease-out duration-100 delay-75 minw-[8rem] md:min-w-[10rem] py-3 rounded-lg  ${
                        darkmode
                          ? "bg-dark shadow-neoInsetButtonDark"
                          : "bg-light shadow-neoInsetButton"
                      } text-[#006EE5] text-sm text-center px-6`
                    : `min-w-[8rem] md:min-w-[10rem] py-3 rounded-lg transition-all ease-out duration-100 delay-75 ${
                        darkmode
                          ? "bg-dark hover:shadow-neoButtonDark text-dark"
                          : "bg-light hover:shadow-neoButton text-light"
                      } hover:text-[#006EE5] hover:scale-95 cursor-pointer text-sm text-center px-6`
                }
                onClick={() => {
                  handleActiveLink(link.id);
                  handleShowMenu();
                }}
                to={link.url}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                delay={100}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => handleDarkMode()}
        className={`${
          darkmode
            ? "shadow-neoButtonDark hover:shadow-neoInsetDark text-dark bg-dark"
            : "shadow-neoButton hover:shadow-neohover text-light bg-light"
        } fixed md:top-5 lg:right-8 right-5 top-3 p-3 rounded-lg cursor-pointer transform transition-all duration-300 hover:text-[#006EE5] z-[100]`}
      >
        <ImSwitch className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
