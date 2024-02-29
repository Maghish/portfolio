import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

function Profilebar() {
  return (
    <div className="bg-[#353638] p-5 h-auto max-w-[400px] max-h-screen flex flex-col items-center">
      <p className="text-[#DCDFE4] font-consolas text-xl font-bold mb-2">
        Hello, I'm Maghish
      </p>

      <p className="text-[#cbcdd2] font-consolas text-sm font-semibold">
        MERN Stack Developer | Full Stack Developer
      </p>

      <div className="bg-[#3d3e40] mt-12 p-8 rounded-lg border-[#a1ffef7e] border-2">
        <p className="text-[#cbcdd2] font-consolas text-sm self-start font-semibold">
          I'm a passionate programmer who expertise at a lot of technologies
          related to web development. I offer a few freelance services on web
          development as well! I'm also a part of a github organization called "
          <strong className="underline cursor-pointer">
            StarReach Developments
          </strong>
          " which is an innovative organization making ideas into reality and
          I'm glad to be a part of them.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <button className="bg-[#3d3e40] w-14 h-14 rounded-lg border-2 border-[#a1ffef7e]">
          <IconContext.Provider
            value={{ color: "#a1ffef7e", size: "40px", className: "m-auto" }}
          >
            <FaGithub />
          </IconContext.Provider>
        </button>
        <button className="bg-[#3d3e40] w-14 h-14 rounded-lg border-2 border-[#a1ffef7e] ml-5">
          <IconContext.Provider
            value={{ color: "#a1ffef7e", size: "40px", className: "m-auto" }}
          >
            <FaLinkedin />
          </IconContext.Provider>
        </button>
        <button className="bg-[#3d3e40] w-14 h-14 rounded-lg border-2 border-[#a1ffef7e] ml-5">
          <IconContext.Provider
            value={{ color: "#a1ffef7e", size: "40px", className: "m-auto" }}
          >
            <FaDiscord />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Profilebar;
