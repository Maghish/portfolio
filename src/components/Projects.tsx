import ProjectCard from "./subcomponents/ProjectCard";

export default function Projects() {
  return (
    <div className="mt-auto mb-0 lg:mb-[260px] relative bottom-0 lg:top-0 left-0 w-full min-h-[calc(100vh*3)] flex flex-col items-center py-8 px-5 md:px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">Projects</h2>
      <div className="mt-10 flex flex-wrap gap-[20px] w-full px-[10px] md:px-[35px] py-[35px] max-h-[7250px] overflow-y-auto items-center justify-center">
        <ProjectCard
          projectName="RAGE"
          projectDescription="RAGE.js is the implementation of the RAGE approach, which is a data management approach that enables offline-first applications by caching data locally in JSON files or any other local database types."
          projectLink="https://github.com/rage-js/core"
          projectTags={["MongoDB", "JavaScript", "TypeScript", "Node.js"]}
        />
        <ProjectCard
          projectName="DeliverEase"
          projectDescription="DeliverEase is an innovative platform designed to empower delivery partners and foster seamless connections between buyers and sellers without the need for intermediaries. This project belongs to TeamCodeArena Organization and is now discontinued."
          projectLink="https://github.com/TeamCodeArena/DeliverEase"
          projectTags={["Django", "Python", "HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          projectName="Dis-Cogs"
          projectDescription="Dis-Cogs is a discord.js bot template that uses the idea of discord.py's Cogs feature and implements it on discord.js "
          projectLink="https://github.com/StarReach/Dis-Cogs"
          projectTags={["Discord.js", "Node.js", "TypeScript"]}
        />
        <ProjectCard
          projectName="Capstone"
          projectDescription="Capstone is a web application which lets you create and manage tasks. This was my final project for CS50W"
          projectLink="https://github.com/Maghish/Capstone"
          projectTags={["JavaScript", "Django", "CSS", "Python"]}
        />
        <ProjectCard
          projectName="Pythonic Billing System"
          projectDescription="This is a simple billing system which is designed by Python language, in which you can create, manage and your delete shop items. This was my final project for CS50P"
          projectLink="https://github.com/Maghish/The-Pythonic-Billing-System"
          projectTags={["Python"]}
        />
        <ProjectCard
          projectName="CS50SQL Final Project"
          projectDescription="My CS50SQL final project, which is a simple SQLite database designed as a simple and easy database for business of individual sellers who sell their products online without an actual company."
          projectLink=""
          projectTags={["SQLite"]}
        />
      </div>
    </div>
  );
}
