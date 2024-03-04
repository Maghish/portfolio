import { useState } from "react";

import InfoNavBar from "./InfoNavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function Infobar() {
  const [activeTab, setActiveTab] = useState<string>("About Me");
  const findActiveTab = () => {
    if (activeTab === "About Me") {
      return <AboutMe />;
    }

    if (activeTab === "Projects") {
      return <Projects />;
    }
  };

  return (
    <div className="bg-bgThemeGray h-[560px] max-h-[560px] w-full max-w-[700px] order-2 xl:order-1 border-y-2 border-l-2 border-r-2 xl:border-r-0 border-borderDarkerGreenColor rounded-l-lg rounded-r-lg xl:rounded-r-none flex flex-col">
      {/* Navbar */}
      <InfoNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Body */}
      <div className="h-[490px] max-h-[490px] p-5 pb-0 order-1 xl:order-2">
        {findActiveTab()}
      </div>
    </div>
  );
}

export default Infobar;
