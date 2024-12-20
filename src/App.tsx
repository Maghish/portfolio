import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const parallaxRef = useRef<any>(null);

  const handleScrollTo = (page: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-y-auto overflow-x-hidden">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <Parallax ref={parallaxRef} pages={2.5}>
        <ParallaxLayer offset={0} speed={1} onClick={() => handleScrollTo(1)}>
          <MainText />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.5}
          onClick={() => handleScrollTo(0)}
        >
          <div className="flex flex-row justify-between gap-x-2 w-full">
            <AboutMe />
            <Experience />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0.1}
          onClick={() => handleScrollTo(1.4)}
        >
          <Projects />
        </ParallaxLayer>

        {/* <BottomBar /> */}
      </Parallax>
    </div>
  );
}

export default App;
