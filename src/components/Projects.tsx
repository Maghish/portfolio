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
        description="Pluto is a web application that lets users to create clouds and invite their friends to chat together, a cloud is temporary and users can earn perks like permanent clouds, etc based on their activity on this platform."
        tags={[
          "Next.js",
          "TailwindCSS",
          "TypeScript",
          "Express.js",
          "Node.js",
          "MongoDB",
        ]}
        projectLink="https://github.com/StarReach/Pluto-Web"
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
        name="RAGE"
        description="RAGE is a data management approach that prioritizes a smooth and responsive user experience. It leverages local data storage to deliver information quickly, even in offline scenarios. This reduces reliance on network requests, resulting in faster loading times and lower data usage."
        tags={["Node.js", "TypeScript", "MongoDB"]}
        projectLink="https://github.com/Maghish/RAGE"
      />

      <ProjectCard
        name="react-firebase-template"
        description="This is a template for a React App with Firebase integrated and deployed in Firebase. Just clone this repo and you can start your new react app with firebase already integrated and ready to deploy."
        tags={["React.js", "Vite.js", "TailwindCSS", "Firebase"]}
        projectLink="https://github.com/Maghish/react-firebase-template"
      />
    </div>
  );
}

export default Projects;
