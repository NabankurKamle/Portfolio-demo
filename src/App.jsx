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
  const [activeLink, setActiveLink] = useState(1);

  const handleActiveLink = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="font-Helvetica">
      <Navbar handleActiveLink={handleActiveLink} activeLink={activeLink} />
      <Home handleActiveLink={handleActiveLink} />
      <Achivements handleActiveLink={handleActiveLink} />
      <AboutMe handleActiveLink={handleActiveLink} />
      <Skills handleActiveLink={handleActiveLink} />
      <Portfolio handleActiveLink={handleActiveLink} />
      <Feedback handleActiveLink={handleActiveLink} />
      <Contact handleActiveLink={handleActiveLink} />
      <Footer />
    </div>
  );
}

export default App;
