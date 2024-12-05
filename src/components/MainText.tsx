import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function MainText() {
  const [text] = useTypewriter({
    words: ["full-stack", "mern stack", "discord bot", "node.js", "python"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="relative top-0 left-0 border-b-white border-opacity-10 border-b-4 w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center space-y-1">
      <h3 className="text-2xl font-inter-black text-white">
        Hello, I'm Maghish 👋
      </h3>
      <p className="text-sm font-inter-bold text-white">
        A{" "}
        <span className="text-sm font-inter-bold bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
          {text}
        </span>
        <span className="ml-[-3px]">
          <Cursor cursorBlinking={false} />
        </span>{" "}
        dev you may know
      </p>
    </div>
  );
}
