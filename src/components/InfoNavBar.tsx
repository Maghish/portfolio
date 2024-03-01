import { useState } from "react";

import { InfoNavBarTagComponent, InfoBarComponent } from "../vite-env";

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
      } ${name === "Services" ? "rounded-br-lg" : ""} px-[22.150px] pt-[11px]`}
      onClick={() => {
        setCurrentTabShowing(name);
      }}
    >
      <p
        className={`${
          checkCurrentShowingTab()
            ? "text-borderContrastGreenColor"
            : "text-themeWhite"
        } font-consolas cursor-pointer transition delay-[15ms] ease-[cubic-bezier(0.7, -0.11, 0, 0.98)]`}
      >
        {name}
      </p>
    </div>
  );
}

function InfoNavBar({ activeTab, setActiveTab }: InfoBarComponent) {
  return (
    <>
      <div className="bg-bgThemeLighterGray rounded-br-lg rounded-tl-lg w-[450px] min-h-[50px] flex flex-row">
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
