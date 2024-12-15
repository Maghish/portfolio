import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function AboutMe() {
  const [text] = useTypewriter({
    words: ["Passionate", "Self-Taught", "Student"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 40,
  });

  const [imageSize, setImageSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth, newHeight;

      if (windowWidth <= 768) {
        // Adjust breakpoint as needed
        newWidth = 300;
        newHeight = 300;
      } else {
        newWidth = 400;
        newHeight = 400;
      }
      setImageSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size calculation
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-max flex flex-col items-center py-8 px-20">
      <h2 className="font-inter-extrabold text-2xl text-white">About Me</h2>
      <div className="mt-20 inline-flex flex-col md:flex-row items-center md:items-start">
        <p className="text-white font-inter-medium text-sm md:text-md w-full">
          A 15 year old{" "}
          <span className="font-inter-bold bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
            {text}
          </span>
          <span className="ml-[-3px]">
            <Cursor cursorBlinking={false} />
          </span>{" "}
          Programmer from India, Who has 2 years of experience on coding. I'm an
          expert at Discord Bot Development to be honest :D I also create web
          apps with React, Next.js and I'm willing to build web apps with new
          frameworks everyday! I'm quite a learner you can say, I love to adopt
          to new technologies every often!
        </p>
        <div className="flex flex-wrap mt-10 md:mt-0 ml-0 md:ml-10 justify-around w-full sm:gap-x-2 gap-x-1 gap-y-1 sm:gap-y-2">
          <div className="w-max h-max rounded-lg bg-[#191919] cursor-pointer flex items-center justify-center">
            <img
              src={
                "https://skillicons.dev/icons?i=mongodb,express,react,nodejs,nextjs,tailwind,ts,js,django,html,css,python,firebase,mysql,postgres,sqlite,prisma,vite,figma,graphql,vercel,md,neovim,vscode,git,npm,docker,discordjs&theme=dark&perline=7"
              }
              alt="tech-stack-icon"
              className="m-auto object-fill"
              width={imageSize.width}
              height={imageSize.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
