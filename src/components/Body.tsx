function Body() {
  return (
    <div className="absolute w-full h-full top-0 bottom-0 pt-14 p-4 pb-6">
      <div>
        <div className="flex flex-row">
          <p className="font-consolas font-semibold text-[#98C379]">
            maghi@DESKTOP-H4T750N
          </p>
          <p className="font-consolas font-semibold text-[#C678DD] ml-2">
            MINGW4
          </p>
          <p className="font-consolas font-semibold text-[#E5C07B] ml-2">~</p>
        </div>
        <div className="flex flex-row">
          <p className="font-consolas font-semibold text-[#DCDFE4]">$</p>
          <input
            type="text"
            className="bg-inherit outline-none w-full h-full ml-2 font-semibold text-[#DCDFE4] caret-[#DCDFE4] font-consolas placeholder:text-[#92959a] placeholder:font-consolas placeholder:font-semibold"
            placeholder="run help to access all available commands"
            autoFocus
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Body;
