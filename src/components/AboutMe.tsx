import TechStackTag from "./TechStackTag";

function TechStackSection() {
  return (
    <div className="max-h-full mb-4">
      <p className="text-themeWhite font-consolas font-bold">Tech Stack:</p>

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
        <TechStackTag name="Next.js" />
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
  );
}

function StrengthsAndWeaknesses() {
  return (
    <div className="max-h-full">
      <p className="text-themeWhite font-bold font-consolas">
        Experience & Knowledge
      </p>
      <p className="text-themeLightGray font-semibold font-consolas mt-2 text-sm">
        I have done couple of projects with MERN Stack, React.js and Firebase
        deployment, React.js with TypeScript and Vercel deployment,
        Single-Page-Application with only HTML and CSS with JavaScript, HTML and
        CSS with Django as the Back-end, etc. I took and got certified on
        various courses:
        <ul className="mt-1 pl-7 list-disc mb-2 text-borderContrastGreenColor">
          <li>
            <a
              href="https://certificates.cs50.io/40a16caf-38dc-469f-82b2-0372dc23816b"
              className="cursor-pointer underline"
            >
              CS50's Introduction to Programming with Python
            </a>
          </li>
          <li>
            <a
              href="https://certificates.cs50.io/6d9f19fa-51d6-4bd5-bb89-fc2d4922df95"
              className="cursor-pointer underline"
            >
              CS50's Web Programming with Python and JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://certificates.cs50.io/b46e41f0-27e1-49af-9dc6-722f704e6ba6"
              className="cursor-pointer underline"
            >
              CS50's Introduction to Artificial Intelligence with Python
            </a>
          </li>
          <li>
            <a
              href="https://ude.my/UC-99c4759a-dddc-45f3-89d3-fdf764c66b95/"
              className="cursor-pointer underline"
            >
              Udemy's Build Web Apps with React & Firebase
            </a>
          </li>
          <li>
            <a
              href="https://ude.my/UC-7d2c1160-691d-4595-b111-1394bee7c16f/"
              className="cursor-pointer underline"
            >
              Udemy's React, NodeJS, Express & MongoDB - The MERN Fullstack
              Guide
            </a>
          </li>
        </ul>
        Hence I'm quite experienced and have solid Knowledge on MERN Stack,
        React, Python and Django. I may lack experience with production grade
        projects or SaaS because I never intend to work on those kind of
        projects, that's why I decided to make a github organization called "
        <a
          href="https://github.com/StarReach"
          className="underline text-borderContrastGreenColor cursor-pointer"
        >
          StarReach Developments
        </a>
        " which is an innovative organization where people make ideas into
        reality. I may be the creator of that organization but I intend to be
        just a member of that organization because I don't have project or team
        management skills and I always prefer to work as a team member rather
        than a team leader. I'm now working on various projects with MERN Stack
        on that organization to gain more experience and knowledge.
      </p>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="overflow-y-scroll scrollBar pl-2 max-h-full">
      <TechStackSection />
      <StrengthsAndWeaknesses />
    </div>
  );
}

export default AboutMe;
