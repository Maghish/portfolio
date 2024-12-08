export default function AboutMe() {
  return (
    <div className="w-full h-screen flex flex-col items-center py-8 px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">About Me</h2>
      <p className="mt-20 text-white font-inter-medium text-md text-center w-full">
        A 15 year old Self-Taught, Passionate, Programmer from India, Who has 2
        years of experience on coding.
      </p>
      <div className="flex flex-wrap mt-10 justify-around w-full sm:gap-x-2 gap-x-1 gap-y-1 sm:gap-y-2">
        <div className="w-max h-max rounded-lg bg-[#191919] cursor-pointer flex items-center justify-center">
          <img
            src={
              "https://skillicons.dev/icons?i=mongodb,express,react,nodejs,nextjs,tailwind,ts,js,django,html,css,python,firebase,mysql,postgres,sqlite,prisma,vite,figma,graphql,vercel,md,neovim,vscode,git,npm,docker,discordjs&theme=dark&perline=7"
            }
            alt="tech-stack-icon"
            className="m-auto object-fill"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
