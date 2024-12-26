import ProjectCard from "./subcomponents/ProjectCard";

export default function Projects() {
  return (
    <div className="mt-auto mb-0 lg:mb-[260px] relative bottom-0 lg:top-0 left-0 w-full min-h-[calc(100vh*3)] flex flex-col items-center py-8 px-5 md:px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">Projects</h2>
      <div className="mt-10 flex flex-col gap-y-[20px] w-full md:w-3/4 lg:w-2/4 px-[10px] md:px-[35px] py-[35px] max-h-[645px] overflow-y-auto">
        <ProjectCard
          projectName="Pluto"
          projectDescription="Pluto is a web application that lets users to create clouds and invite  their friends to chat together, a cloud is temporary and users can earn  perks like permanent clouds, etc based on their activity on this  platform."
          projectLink="https://github.com/StarReach/Pluto-Web"
          projectTags={[
            "MongoDB",
            "Express.js",
            "Next.js",
            "Tailwind CSS",
            "Web-Sockets",
            "TypeScript",
          ]}
        />
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
      </div>
    </div>
  );
}
