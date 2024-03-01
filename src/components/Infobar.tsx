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
    <div className="bg-bgThemeGray h-auto w-full max-w-[700px] max-h-screen border-y-2 border-l-2 border-borderDarkerGreenColor rounded-l-lg">
      {/* Navbar */}
      <InfoNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Body */}
      <div className="w-full h-full p-5">{findActiveTab()}</div>
    </div>
  );
}

export default Infobar;
