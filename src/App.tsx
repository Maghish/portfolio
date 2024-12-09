import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-y-auto px-[20px] overflow-x-hidden">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <MainText />
      <AboutMe />
      <Projects />
      <BottomBar />
    </div>
  );
}

export default App;
