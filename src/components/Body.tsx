import { useEffect, useState } from "react";
import CommandBox from "./CommandBox";

import DecideCommandOutput from "./DecideCommandOutput";

function Body() {
  const [allInputedCommands, setAllInputedCommands] = useState<any>([]);

  useEffect(() => {
    console.log(allInputedCommands);
  }, []);

  return (
    <div className="absolute w-full h-full top-0 bottom-0 pt-14 p-4 pb-6">
      <CommandBox
        onEnterPressed={(value: string) => {
          setAllInputedCommands([...allInputedCommands, value]);
        }}
      />
      {allInputedCommands.map((value: string, index: number) => {
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
