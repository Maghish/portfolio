interface NavbarProps {
  parallaxRef: React.MutableRefObject<any>;
}

export default function Navbar({ parallaxRef }: NavbarProps) {
  const scrollTo = (offset: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-[#000000] bg-opacity-45 backdrop-blur-xl w-full h-[50px] flex flex-row items-center justify-center space-x-10">
      <div className="relative inline-block group">
        <button
          onClick={() => scrollTo(0.7)}
          className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black bg-transparent border-none outline-none p-0 m-0"
        >
          About Me
        </button>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
      <div className="relative inline-block group">
        <button
          onClick={() => scrollTo(1.7)}
          className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black bg-transparent border-none outline-none p-0 m-0"
        >
          Projects
        </button>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
      <div className="relative inline-block group">
        <button
          onClick={() => scrollTo(2.9)}
          className="relative z-10 cursor-pointer text-white font-inter-bold transition duration-300 ease-in-out group-hover:text-black bg-transparent border-none outline-none p-0 m-0"
        >
          Contact
        </button>
        <span className="absolute inset-y-0 left-[-4px] right-[-4px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-opacity-75 transform origin-left scale-x-0 transition-transform duration-300 pointer-events-none group-hover:scale-x-[1] rounded"></span>
      </div>
    </div>
  );
}
