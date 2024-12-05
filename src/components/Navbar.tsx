export default function Navbar() {
  return (
    <div className="bg-navbarBg w-full h-[50px] flex flex-row items-center justify-center space-x-10">
      <span className="cursor-pointer bg-clip-text text-transparent font-consolas font-black bg-gradient-to-r from-white via-white to-white transition duration-300 ease-in-out hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
        About Me
      </span>
      <span className="cursor-pointer bg-clip-text text-transparent font-consolas font-black bg-gradient-to-r from-white via-white to-white transition duration-300 ease-in-out hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
        Projects
      </span>
      <span className="cursor-pointer bg-clip-text text-transparent font-consolas font-black bg-gradient-to-r from-white via-white to-white transition duration-300 ease-in-out hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
        Contact
      </span>
    </div>
  );
}
