import { ProjectCardComponent } from "../vite-env";
import TechStackTag from "./TechStackTag";

function ProjectCard({
  name,
  description,
  tags,
  projectLink,
}: ProjectCardComponent) {
  return (
    <div
      className="flex flex-col bg-bgThemeLighterGray border-2 border-borderGreenColor rounded-lg w-full h-[200px] py-3 px-6 cursor-pointer"
      onClick={() => {
        window.location.href = projectLink;
      }}
    >
      <p className="text-themeWhite font-consolas font-semibold">{name}</p>
      <div className="mt-3 overflow-auto max-h-full scrollBar">
        <p className="text-themeLightGray font-consolas text-sm">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap mt-3 h-auto max-h-full">
        {tags.map((value, key) => {
          return (
            <div key={key}>
              <TechStackTag name={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="overflow-y-scroll scrollBar pl-2 max-h-full grid grid-cols-1 gap-6">
      <ProjectCard
        name="Pluto"
        description="Pluto is a chat-app in which you can create hubs and chat in them. This project is the first project of StarReach Developments so it's not completed yet."
        tags={[
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "TailwindCSS",
          "Vite.js",
          "TypeScript",
        ]}
        projectLink="https://github.com/StarReach/Pluto"
      />

      <ProjectCard
        name="DeliverEase"
        description="DeliverEase is an innovative platform designed to empower delivery partners and foster seamless connections between buyers and sellers without the need for intermediaries. This project belongs to TeamCodeArena Organization and is now discontinued."
        tags={["Django", "Python", "HTML", "CSS", "JavaScript"]}
        projectLink="https://github.com/TeamCodeArena/DeliverEase"
      />

      <ProjectCard
        name="Remind Me"
        description="Remind Me is a simple web application in which you can create and manage tasks."
        tags={[
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "TailwindCSS",
          "Vite.js",
        ]}
        projectLink="https://github.com/Maghish/remind-me"
      />

      <ProjectCard
        name="Rate My Tech Stack"
        description="Rate-My-Tech-Stack is a web application in which you can build a tech stack and get it's overall ratings. "
        tags={[
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "TailwindCSS",
          "Vite.js",
        ]}
        projectLink="https://github.com/Maghish/Rate-My-Tech-Stack"
      />

      <ProjectCard
        name="react-firebase-template"
        description="This is a template for a React App with Firebase integrated and deployed in Firebase. Just clone this repo and you can start your new react app with firebase already integrated and ready to deploy. "
        tags={["React.js", "Vite.js", "TailwindCSS", "Firebase"]}
        projectLink="https://github.com/Maghish/react-firebase-template"
      />

      <ProjectCard
        name="Animetrix"
        description="A Discord Bot inspired by various different anime and with a stunning Duel System."
        tags={["Python", "Discord.py"]}
        projectLink="https://github.com/Maghish/Animetrix"
      />
    </div>
  );
}

export default Projects;
