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
    <div className="bg-[#191919] px-[40px] py-[35px] rounded-xl cursor-pointer flex flex-col gap-y-[20px]">
      <h4 className="font-inter-bold text-white text-lg">{projectName}</h4>
      <p className="font-inter-regular text-white text-sm">
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
