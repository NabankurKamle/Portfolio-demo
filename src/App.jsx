import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivments";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkmode, setDarkmode] = useState(true);
  const [activeLink, setActiveLink] = useState(1);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDarkMode = () => setDarkmode(!darkmode);

  const handleActiveLink = (id) => {
    setActiveLink(id);
    setShowMenu(false);
  };

  return (
    <div className="font-Helvetica">
      <Navbar
        handleActiveLink={handleActiveLink}
        activeLink={activeLink}
        darkmode={darkmode}
        handleDarkMode={handleDarkMode}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
      />
      <Home handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Achivements handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <AboutMe handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Skills handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Portfolio handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Feedback handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Contact handleActiveLink={handleActiveLink} darkmode={darkmode} />
      <Footer darkmode={darkmode} />
    </div>
  );
}

export default App;
