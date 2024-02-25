import { useRef, useState } from "react";
import { CommandBoxProps } from "../vite-env";

function CommandBox(props: CommandBoxProps) {
  const inputRef = useRef<null | any>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleEnterKeyPress = (e: any) => {
    if (e.key === "Enter") {
      props.onEnterPressed(inputRef.current.value);
    }
  };

  return (
    <div className="mb-[12px] command-input-field" ref={props.REF}>
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
          placeholder="enter 'start' to start"
          autoFocus
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleEnterKeyPress}
        ></input>
      </div>
    </div>
  );
}

export default CommandBox;
