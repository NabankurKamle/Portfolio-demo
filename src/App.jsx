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
  return (
    <div className="font-Helvetica">
      <Navbar />
      <Home />
      <Achivements />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
