import { useState } from "react";

function Infobar() {
  const [aboutMeShowing, setAboutMeShowing] = useState<boolean>(true);
  const [projectsShowing, setProjectsShowing] = useState<boolean>(false);
  const [contactShowing, setContactShowing] = useState<boolean>(false);
  const [servicesShowing, setServicesShowing] = useState<boolean>(false);

  return (
    <div className="bg-bgThemeGray h-auto w-full max-w-[700px] max-h-screen border-y-2 border-l-2 border-borderDarkerGreenColor rounded-l-lg">
      {/* Navbar */}
      <div className="bg-bgThemeLighterGray rounded-b-xl w-[450px] h-[50px] flex flex-row">
        <p
          className={`${
            aboutMeShowing
              ? "text-borderContrastGreenColor"
              : " text-themeWhite"
          } font-consolas m-auto cursor-pointer`}
        >
          About Me
        </p>

        <p
          className={`${
            projectsShowing
              ? "text-borderContrastGreenColor"
              : " text-themeWhite"
          } font-consolas m-auto cursor-pointer`}
        >
          Projects
        </p>

        <p
          className={`${
            contactShowing
              ? "text-borderContrastGreenColor"
              : " text-themeWhite"
          } font-consolas m-auto cursor-pointer`}
        >
          Contact
        </p>

        <p
          className={`${
            servicesShowing
              ? "text-borderContrastGreenColor"
              : " text-themeWhite"
          } font-consolas m-auto cursor-pointer`}
        >
          Services
        </p>
      </div>

      {/* Body */}
      <div></div>
    </div>
  );
}

export default Infobar;
