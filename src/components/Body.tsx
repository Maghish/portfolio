function Body() {
  return (
    <div className="absolute w-full h-full top-0 bottom-0 pt-20 p-4 pb-6">
      <div>
        <div className="flex flex-row">
          <p className="font-consolas text-[#98C379]">maghi@DESKTOP-H4T750N</p>
          <p className="font-consolas text-[#C678DD] ml-2">MINGW4</p>
          <p className="font-consolas text-[#E5C07B] ml-2">~</p>
        </div>
        <div className="flex flex-row">
          <p className="font-consolas text-[#DCDFE4]">$</p>
          <input className="bg-inherit outline-none w-full h-full ml-2 text-[#DCDFE4] caret-[#DCDFE4] font-consolas placeholder:text-[#DCDFE4] placeholder:font-consolas"></input>
        </div>
      </div>
    </div>
  );
}

export default Body;
