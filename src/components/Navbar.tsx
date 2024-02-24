import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <div className="bg-[#272727] w-full h-12 z-10 absolute flex flex-row items-center justify-end">
      <IconContext.Provider
        value={{
          color: "#D6D6D6",
          className: "w-[32px] h-[32px] p-2 mr-4 cursor-pointer",
        }}
      >
        <VscChromeMinimize />
        <VscChromeMaximize />
        <VscChromeClose />
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
