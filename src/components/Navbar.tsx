export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 bg-[#FFFFFF] bg-opacity-10 backdrop-blur-xl w-full h-[50px] flex flex-row items-center justify-center space-x-10">
      <div className="relative inline-block group">
        <span className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black">
          About Me
        </span>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
      <div className="relative inline-block group">
        <span className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black">
          Projects
        </span>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
      <div className="relative inline-block group">
        <span className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black">
          Contact
        </span>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
    </div>
  );
}
