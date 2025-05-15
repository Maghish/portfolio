import ProjectStackTag from "./ProjectStackTag";

export default function ProjectCard({
  projectName,
  projectDescription,
  projectLink,
  projectTags,
}: {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectTags: string[];
}) {
  return (
    <div className="bg-[#191919] px-[25px] md:px-[40px] py-[35px] rounded-xl cursor-pointer flex flex-col gap-y-[20px] flex-shrink-0 flex-grow-0 flex-basis-[320px] w-[320px] min-w-[320px] max-w-[320px] min-h-[330px] max-h-[330px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-tech-stack-tag-shadow">
      <h4 className="font-inter-bold text-white text-lg text-center md:text-start">
        {projectName}
      </h4>
      <p className="font-inter-regular text-white text-sm min-h-[125px] max-h-[125px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {projectDescription}
      </p>
      <div className="w-full flex flex-wrap gap-x-[5px] gap-y-[5px]">
        {projectTags.map((tag) => (
          <ProjectStackTag tag={tag} />
        ))}
      </div>
    </div>
  );
}
