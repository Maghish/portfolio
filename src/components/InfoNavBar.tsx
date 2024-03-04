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
      } ${
        name === "Services" ? "xl:rounded-br-lg" : ""
      } px-[10px] mdlw:px-[22.150px] pt-[11px]`}
      onClick={() => {
        setCurrentTabShowing(name);
      }}
    >
      <p
        className={`${
          checkCurrentShowingTab()
            ? "text-borderContrastGreenColor"
            : "text-themeWhite"
        } font-consolas text-[13.5px] lw:text-sm mdlw:text-[16px] cursor-pointer transition delay-[15ms] duration-300 ease-[cubic-bezier(0.7, -0.11, 0, 0.98)]`}
      >
        {name}
      </p>
    </div>
  );
}

function InfoNavBar({ activeTab, setActiveTab }: InfoBarComponent) {
  return (
    <div className="bg-bgThemeLighterGray rounded-tr-lg xl:rounded-tr-none xl:rounded-br-lg rounded-tl-lg w-full xl:w-[450px] mt-auto xl:mt-0 min-h-[50px] flex flex-row justify-center xl:justify-start order-2 xl:order-1">
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
  );
}

export default InfoNavBar;
