import { useState } from "react";
import links from "../collections/navLinks";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const handleActiveLink = (id) => {
    setActiveLink(id);
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      style={!showMenu ? { overflow: "hidden" } : { overflow: "visible" }}
      className="w-[100vw] md:fixed bg-light z-50 overflow-hidden relative"
    >
      <div onClick={handleShowMenu} className="md:hidden pl-5 pt-5">
        {showMenu ? (
          <IoClose className="text-xl" />
        ) : (
          <IoMenu className="text-xl" />
        )}
      </div>
      <div
        style={!showMenu ? { right: "-100vw" } : { right: "0px" }}
        className="md:static absolute transition-all duration-300 ease-out bg-light w-full top-10"
      >
        <ul className="flex flex-col md:flex-row items-center justify-center py-8 space-y-10 md:space-y-0 md:space-x-4 sm:flex z-20">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className={
                  activeLink === link.id
                    ? "shadow-neoInsetButton transition-all ease-out duration-100 delay-75 minw-[8rem] md:min-w-[10rem] py-3 rounded-lg  bg-light text-[#006EE5] text-sm text-center px-6"
                    : "hover:shadow-neoButton minw-[8rem] md:min-w-[10rem] py-3 rounded-lg transition-all ease-out duration-100 delay-75 bg-light text-[#41507B] hover:text-[#006EE5] hover:scale-95 cursor-pointer text-sm text-center px-6"
                }
                onClick={() => handleActiveLink(link.id)}
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
    </div>
  );
};

export default Navbar;
