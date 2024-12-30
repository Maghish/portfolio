import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect, useState } from "react";

import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ExperienceModal from "./components/subcomponents/ExperienceModal";

function App() {
  const parallaxRef = useRef<any>(null);

  const handleScrollTo = (page: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth <= 1024);
  const [parallaxPages, setParallaxPages] = useState(2.5);
  const [projectsPageOffset, setProjectsPageOffset] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setParallaxPages(isLgScreen ? 3.5 : 2.5);
    setProjectsPageOffset(isLgScreen ? 1.5 : 2.5);
    console.log(isLgScreen, projectsPageOffset);
  }, [isLgScreen]);

  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-y-auto overflow-x-hidden">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <Parallax ref={parallaxRef} pages={2}>
        <ParallaxLayer offset={0} speed={1}>
          <MainText />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.1}>
          <div className="flex flex-col lg:flex-row justify-between gap-x-0 gap-y-0 lg:gap-y-0 lg:gap-x-2 w-full">
            <AboutMe />
            <Experience />
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={1.5}
          // factor={3}
          speed={0.2}
          onClick={() => handleScrollTo(1.4)}
        >
          <Projects />
        </ParallaxLayer> */}

        <BottomBar />
      </Parallax>
      <ExperienceModal />
    </div>
  );
}

export default App;
