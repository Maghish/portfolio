import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

function Profilebar() {
  return (
    <div className="bg-bgThemeGray p-5 h-auto xl:h-[560px] max-w-[700px] xl:max-w-[400px] order-1 xl:order-2 max-h-full flex flex-col items-center border-2 border-borderDarkerGreenColor mb-9 xl:mb-0">
      <p className="text-themeWhite font-consolas text-xl xxl:text-2xl font-bold mb-2">
        Hello, I'm Maghish
      </p>

      <p className="text-themeLightGray font-consolas text-[12px] 2xl:text-sm font-semibold">
        MERN Stack Developer | Full Stack Developer
      </p>

      <div className="bg-bgThemeLighterGray mt-7 hxl:mt-12 p-4 2xl:p-8 rounded-lg border-borderGreenColor border-2">
        <p className="text-themeLightGray font-consolas text-[12px] xxl:text-sm self-start font-semibold">
          I'm a passionate programmer who expertise at a lot of technologies
          related to web development. I offer a few freelance services on web
          development as well! I'm also a part of a github organization called "
          <a
            href="https://github.com/StarReach"
            className="underline cursor-pointer text-borderContrastGreenColor"
          >
            StarReach Developments
          </a>
          " where I work with my team to build various applications.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 xl:mt-auto">
        <button className="bg-bgThemeLighterGray w-12 h-12 hxl:w-14 hxl:h-14 rounded-lg border-2 border-borderGreenColor">
          <IconContext.Provider
            value={{
              color: "#a1ffef7e",
              size: `${window.innerWidth >= 1295 ? "40px" : "35px"}`,
              className: "m-auto",
            }}
          >
            <a href="https://github.com/Maghish">
              <FaGithub />
            </a>
          </IconContext.Provider>
        </button>
        <button className="bg-bgThemeLighterGray w-12 h-12 hxl:w-14 hxl:h-14 rounded-lg border-2 border-borderGreenColor ml-3 hxl:ml-5">
          <IconContext.Provider
            value={{
              color: "#a1ffef7e",
              size: `${window.innerWidth >= 1295 ? "40px" : "35px"}`,
              className: "m-auto",
            }}
          >
            <a href="www.linkedin.com/in/maghish-m-56b533290">
              <FaLinkedin />
            </a>
          </IconContext.Provider>
        </button>
        <button className="bg-bgThemeLighterGray w-12 h-12 hxl:w-14 hxl:h-14 rounded-lg border-2 border-borderGreenColor ml-3 hxl:ml-5">
          <IconContext.Provider
            value={{
              color: "#a1ffef7e",
              size: `${window.innerWidth >= 1295 ? "40px" : "35px"}`,
              className: "m-auto",
            }}
          >
            <FaDiscord />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Profilebar;
