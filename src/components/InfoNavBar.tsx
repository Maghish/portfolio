import { useState } from "react";

import { InfoNavBarTagComponent } from "../vite-env";

function NavBarTag({
  name,
  currentTabShowing,
  setCurrentTabShowing,
}: InfoNavBarTagComponent) {
  const checkCurrentShowingTab = () => {
    if (currentTabShowing === name) {
      return true;
    }

    return false;
  };

  return (
    <div
      className={`${
        checkCurrentShowingTab()
          ? "border-b-4 border-borderContrastGreenColor"
          : ""
      } px-[22.150px] pt-[11px]`}
      onClick={() => {
        setCurrentTabShowing(name);
      }}
    >
      <p
        className={`${
          checkCurrentShowingTab()
            ? "text-borderContrastGreenColor"
            : "text-themeWhite"
        } font-consolas cursor-pointer`}
      >
        {name}
      </p>
    </div>
  );
}

function InfoNavBar() {
  const [activeTab, setActiveTab] = useState<string>("About Me");

  return (
    <>
      <div className="bg-bgThemeLighterGray rounded-br-lg rounded-tl-lg w-[450px] h-[50px] flex flex-row">
        <NavBarTag
          name="About Me"
          currentTabShowing={activeTab}
          setCurrentTabShowing={setActiveTab}
        />

        <NavBarTag
          name="Projects"
          currentTabShowing={activeTab}
          setCurrentTabShowing={setActiveTab}
        />

        <NavBarTag
          name="Contact"
          currentTabShowing={activeTab}
          setCurrentTabShowing={setActiveTab}
        />

        <NavBarTag
          name="Services"
          currentTabShowing={activeTab}
          setCurrentTabShowing={setActiveTab}
        />
      </div>
    </>
  );
}

export default InfoNavBar;
