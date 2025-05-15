export default function BottomBar() {
  return (
    <div className="self-end bg-[#0E0E0E] w-full absolute bottom-0 left-0 h-[220px] justify-self-end p-10 flex flex-row justify-around gap-x-20">
      <div className="flex flex-col">
        <p className="text-white font-inter-bold justify-self-start">
          Also reach out for me on:{" "}
        </p>
        <ul className="mt-4 space-y-0.5">
          <li className="text-primaryColor font-inter-regular cursor-pointer hover:underline hover:underline-offset-4">
            <a href="https://discordapp.com/users/978672079291449424">
              Discord
            </a>
          </li>
          <li className="text-primaryColor font-inter-regular cursor-pointer hover:underline hover:underline-offset-4">
            <a href="https://www.linkedin.com/in/maghish-m-56b533290/">
              LinkedIn
            </a>
          </li>
          <li className="text-primaryColor font-inter-regular cursor-pointer hover:underline hover:underline-offset-4">
            <a href="https://github.com/Maghish">Github</a>
          </li>
        </ul>
      </div>
      <ul className="place-content-center">
        <li className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white font-inter-bold cursor-pointer hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
          About
        </li>
        <li className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white font-inter-bold cursor-pointer hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
          Projects
        </li>
        <li className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white font-inter-bold cursor-pointer hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500">
          Contact
        </li>
      </ul>
    </div>
  );
}
