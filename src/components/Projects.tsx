import { useState } from "react";
import ProjectCard from "./subcomponents/ProjectCard";
import { FaRegSquareCaretRight, FaRegSquareCaretLeft } from "react-icons/fa6";

const projectsData = [
  {
    projectName: "RAGE",
    projectDescription:
      "RAGE.js is the implementation of the RAGE approach, which is a data management approach that enables offline-first applications by caching data locally in JSON files or any other local database types.",
    projectLink: "https://github.com/rage-js/core",
    projectTags: ["MongoDB", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    projectName: "DeliverEase",
    projectDescription:
      "DeliverEase is an innovative platform designed to empower delivery partners and foster seamless connections between buyers and sellers without the need for intermediaries. This project belongs to TeamCodeArena Organization and is now discontinued.",
    projectLink: "https://github.com/TeamCodeArena/DeliverEase",
    projectTags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    projectName: "Dis-Cogs",
    projectDescription:
      "Dis-Cogs is a discord.js bot template that uses the idea of discord.py's Cogs feature and implements it on discord.js",
    projectLink: "https://github.com/StarReach/Dis-Cogs",
    projectTags: ["Discord.js", "Node.js", "TypeScript"],
  },
  {
    projectName: "Capstone",
    projectDescription:
      "Capstone is a web application which lets you create and manage tasks. This was my final project for CS50W",
    projectLink: "https://github.com/Maghish/Capstone",
    projectTags: ["JavaScript", "Django", "CSS", "Python"],
  },
  {
    projectName: "Pythonic Billing System",
    projectDescription:
      "This is a simple billing system which is designed by Python language, in which you can create, manage and delete shop items. This was my final project for CS50P",
    projectLink: "https://github.com/Maghish/The-Pythonic-Billing-System",
    projectTags: ["Python"],
  },
  {
    projectName: "CS50SQL Final Project",
    projectDescription:
      "My CS50SQL final project, which is a simple SQLite database designed as a simple and easy database for business of individual sellers who sell their products online without an actual company.",
    projectLink: "",
    projectTags: ["SQLite"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="mt-auto mb-0 lg:mb-[260px] relative bottom-0 lg:top-0 left-0 w-full min-h-[calc(100vh*3)] flex flex-col items-center py-8 px-5 md:px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">Projects</h2>
      {/* Mobile Carousel */}

      {/* Active Card */}
      <div className="md:hidden relative w-full flex items-center justify-around mt-10 gap-x-auto">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="group relative left-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-transparent disabled:opacity-50 transition-transform duration-200 transform hover:scale-105 active:scale-95"
        >
          <FaRegSquareCaretLeft
            className="transition-colors duration-300 text-white group-hover:text-primaryColor"
            size={30}
          />
        </button>
        <ProjectCard
          projectName={projectsData[currentIndex].projectName}
          projectDescription={projectsData[currentIndex].projectDescription}
          projectLink={projectsData[currentIndex].projectLink}
          projectTags={projectsData[currentIndex].projectTags}
        />
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === projectsData.length - 1}
          className="group relative left-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-transparent disabled:opacity-50 transition-transform duration-200 transform hover:scale-105 active:scale-95"
        >
          <FaRegSquareCaretRight
            className="transition-colors duration-300 text-white group-hover:text-primaryColor"
            size={25}
          />
        </button>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:flex mt-10 flex-wrap gap-[20px] w-full px-[10px] md:px-[35px] py-[35px] max-h-[7250px] overflow-y-auto items-center justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectLink={project.projectLink}
            projectTags={project.projectTags}
          />
        ))}
      </div>
    </div>
  );
}
