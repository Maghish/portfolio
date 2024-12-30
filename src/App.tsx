import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";

import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ExperienceModal from "./components/subcomponents/ExperienceModal";

function App() {
  const [expModalData, setExpModalData] = useState<{
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    techstacks: string[];
    modalActive: boolean;
  }>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    techstacks: [],
    modalActive: false,
  });

  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-y-auto overflow-x-hidden">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <Parallax pages={2.3}>
        <ParallaxLayer offset={0} speed={1}>
          <MainText />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.1}>
          <div className="flex flex-col lg:flex-row justify-between gap-x-0 gap-y-0 lg:gap-y-0 lg:gap-x-2 w-full">
            <AboutMe />
            <Experience setExpModalData={setExpModalData} />
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
      {expModalData.modalActive && (
        <ExperienceModal
          name={expModalData.name}
          description={expModalData.description}
          startDate={expModalData.startDate}
          endDate={expModalData.endDate}
          techstacks={expModalData.techstacks}
        />
      )}
    </div>
  );
}

export default App;
