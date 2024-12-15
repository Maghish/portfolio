import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-y-auto overflow-x-hidden">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <MainText />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.3}>
          <Projects />
        </ParallaxLayer>

        <BottomBar />
      </Parallax>
    </div>
  );
}

export default App;
