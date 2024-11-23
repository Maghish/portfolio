import { useState } from "react";
import Tab from "./Tab";

export default function RightBar() {
  const [currentContent, setCurrentContent] = useState<
    "About" | "Projects" | "Contact" | "Services"
  >("About");

  return (
    <div className="flex flex-row relative bg-barBackground w-full h-[59.18%] lg:h-full lg:w-[59.18%] rounded-3xl py-4">
      <div className="self-end relative bottom-0 lg:ml-auto w-full lg:w-max h-max lg:h-full flex flex-row lg:flex-col justify-evenly lg:justify-center items-center lg:space-y-24 py-4 transform md:translate-x-0 lg:translate-y-0 translate-y-[calc(100%-4rem)] md:bottom-0 transition-transform duration-300 ease-in-out">
        <Tab onClick={() => setCurrentContent("About")} text="About" />
        <Tab onClick={() => setCurrentContent("Projects")} text="Projects" />
        <Tab onClick={() => setCurrentContent("Contact")} text="Contact" />
        <Tab onClick={() => setCurrentContent("Services")} text="Services" />
      </div>
    </div>
  );
}
