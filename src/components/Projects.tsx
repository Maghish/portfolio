import { useState } from "react";
import ProjectCard from "./subcomponents/ProjectCard";
import { FaChevronRight } from "react-icons/fa6";

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
  return (
    <div className="mt-auto mb-0 lg:mb-[260px] relative bottom-0 lg:top-0 left-0 w-full min-h-[calc(100vh*3)] flex flex-col items-center py-8 px-5 md:px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">Projects</h2>

      {/* Mobile Two Independent Scrollable Rows with Full-Width Cards */}
      <div className="md:hidden relative w-full mt-10 space-y-6">
        {/* Row 1 - even indexed projects */}
        <div
          className="overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          // This padding centers the snapping: half the difference between the viewport width and the container width.
          style={{
            paddingLeft: "calc(50vw - 50%)",
            paddingRight: "calc(50vw - 50%)",
          }}
        >
          <div className="flex gap-14 p-4">
            {projectsData
              .filter((_, index) => index % 2 === 0)
              .map((project, idx) => (
                <div key={idx} className="flex-shrink-0 w-full snap-center">
                  <ProjectCard
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectLink={project.projectLink}
                    projectTags={project.projectTags}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Row 2 - odd indexed projects */}
        <div
          className="overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: "calc(50vw - 50%)",
            paddingRight: "calc(50vw - 50%)",
          }}
        >
          <div className="flex gap-14 p-4">
            {projectsData
              .filter((_, index) => index % 2 !== 0)
              .map((project, idx) => (
                <div key={idx} className="flex-shrink-0 w-full snap-center">
                  <ProjectCard
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectLink={project.projectLink}
                    projectTags={project.projectTags}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Overflow Indicator Icon
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <FaChevronRight
            className="text-white transition-colors duration-300 hover:text-primaryColor"
            size={30}
          />
        </div> */}
      </div>

      {/* Desktop Grid remains unchanged */}
      <div className="hidden md:flex mt-10 flex-wrap gap-[20px] w-full px-[10px] md:px-[35px] py-[35px] max-h-[400px] overflow-y-auto items-center justify-center">
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
