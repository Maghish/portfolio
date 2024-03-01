import { useState } from "react";

import InfoNavBar from "./InfoNavBar";
import AboutMe from "./AboutMe";

function Infobar() {
  const [activeTab, setActiveTab] = useState<string>("About Me");
  const findActiveTab = () => {
    if (activeTab === "About Me") {
      return <AboutMe />;
    }
  };

  return (
    <div className="bg-bgThemeGray h-[560px] max-h-[560px] w-full max-w-[700px] border-y-2 border-l-2 border-borderDarkerGreenColor rounded-l-lg flex flex-col">
      {/* Navbar */}
      <InfoNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Body */}
      <div className="h-[490px] max-h-[490px] p-5 pb-0">{findActiveTab()}</div>
    </div>
  );
}

export default Infobar;
