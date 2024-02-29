import { useEffect, useState } from "react";

import { InfoNavBarTagComponent } from "../vite-env";

function NavBarTag(props: InfoNavBarTagComponent) {
  return (
    <div
      className={`${
        props.tabShowing ? "border-b-4 border-borderContrastGreenColor" : ""
      } px-[22.150px] pt-[11px]`}
      onClick={() => {
        props.tabShowing
          ? props.setTabShowing(false)
          : props.setTabShowing(true);
      }}
    >
      <p
        className={`${
          props.tabShowing
            ? "text-borderContrastGreenColor"
            : " text-themeWhite"
        } font-consolas cursor-pointer`}
      >
        {props.name}
      </p>
    </div>
  );
}

function InfoNavBar() {
  const [currentlyShowingTab, setCurrentlyShowingTab] =
    useState<string>("AboutMe");

  return (
    <>
      <div className="bg-bgThemeLighterGray rounded-br-lg rounded-tl-lg w-[450px] h-[50px] flex flex-row">
        <NavBarTag
          name="About Me"
          tabShowing={aboutMeShowing}
          setTabShowing={setAboutMeShowing}
        />

        <NavBarTag
          name="Projects"
          tabShowing={projectsShowing}
          setTabShowing={setProjectsShowing}
        />

        <NavBarTag
          name="Contact"
          tabShowing={contactShowing}
          setTabShowing={setContactShowing}
        />

        <NavBarTag
          name="Services"
          tabShowing={servicesShowing}
          setTabShowing={setServicesShowing}
        />
      </div>
    </>
  );
}

export default InfoNavBar;
