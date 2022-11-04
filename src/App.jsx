import "./App.css";
import AboutMe from "./components/AboutMe";
import Achivements from "./components/Achivments";
import Feedback from "./components/Feedback";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-Gotham">
      <Navbar />
      <Home />
      <Achivements />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Feedback />
    </div>
  );
}

export default App;
