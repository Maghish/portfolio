import { useEffect, useState, useRef } from "react";
import CommandBox from "./CommandBox";

import DecideCommandOutput from "./DecideCommandOutput";

function Body() {
  const [allInputedCommands, setAllInputedCommands] = useState<string[]>([]);
  const firstInputRef = useRef<any>(null);

  const clearTerminal = () => {
    setAllInputedCommands([]);
    firstInputRef.current.querySelector("input").value = "";
    firstInputRef.current.querySelector("input").placeholder = "";
    firstInputRef.current.querySelector("input").focus();
  };

  return (
    <div className="absolute w-full h-full max-w-full overflow-auto top-0 bottom-0 pt-14 p-4 pb-6">
      <CommandBox
        REF={firstInputRef}
        onEnterPressed={(value: string) => {
          setAllInputedCommands([...allInputedCommands, value]);
        }}
      />
      {allInputedCommands.map((value: string, index: number) => {
        if (value.startsWith("clear") && value.trimEnd().endsWith("clear")) {
          clearTerminal();
          return (
            <div key={index}>
              <CommandBox
                onEnterPressed={(value: string) => {
                  setAllInputedCommands([...allInputedCommands, value]);
                }}
              />
            </div>
          );
        }

        return (
          <div key={index}>
            <DecideCommandOutput command={value} />
            {/* For a blank space between the command output and the next command input */}
            <div className="w-full h-[24px]"></div>
            <CommandBox
              onEnterPressed={(value: string) => {
                setAllInputedCommands([...allInputedCommands, value]);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Body;
