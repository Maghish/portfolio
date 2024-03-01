import { TechStackTagComponent } from "../vite-env";

function TechStackTag({ name }: TechStackTagComponent) {
  return (
    <div className="bg-borderContrastGreenColor font-extrabold font-consolas text-black h-fit w-fit px-2 rounded-md cursor-pointer mr-2 mb-2 transition delay-75 ease-out hover:scale-[1.1]">
      {name}
    </div>
  );
}

function AboutMe() {
  return (
    <div>
      <div>
        <p className="text-themeWhite font-consolas font-semibold">
          Tech Stack:
        </p>

        <div className="flex flex-wrap mt-2">
          <TechStackTag name="Python" />
          <TechStackTag name="Django" />
          <TechStackTag name="MongoDB" />
          <TechStackTag name="Express.js" />
          <TechStackTag name="React.js" />
          <TechStackTag name="Node.js" />
          <TechStackTag name="JavaScript" />
          <TechStackTag name="TypeScript" />
          <TechStackTag name="Firebase" />
          <TechStackTag name="Vite.js" />
          <TechStackTag name="TailwindCSS" />
          <TechStackTag name="HTML" />
          <TechStackTag name="CSS" />
          <TechStackTag name="GraphQL" />
          <TechStackTag name="Vercel" />
          <TechStackTag name="Markdown" />
          <TechStackTag name="Git" />
          <TechStackTag name="Docker" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
