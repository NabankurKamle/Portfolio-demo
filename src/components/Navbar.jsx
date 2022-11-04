import { useState } from "react";
import links from "../collections/navLinks";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleActiveLink = (id) => {
    setActiveLink(id);
  };

  return (
    <div className=" w-[100vw] fixed bg-light z-50">
      <ul className="flex items-center justify-center py-8 space-x-4 ">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={
                activeLink === link.id
                  ? "shadow-neoInsetButton transition-all ease-out duration-100 delay-75 px-6 py-3 rounded-lg  bg-light text-[#006EE5] text-sm"
                  : "hover:shadow-neoButton px-6 py-3 rounded-lg transition-all ease-out duration-100 delay-75 bg-light text-[#41507B] hover:text-[#006EE5] hover:scale-95 cursor-pointer text-sm"
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
  );
};

export default Navbar;
