import { useState } from "react";
import CommandBox from "./CommandBox";

import DecideCommandOutput from "./DecideCommandOutput";

function Body() {
  const [allInputedCommands, setAllInputedCommands] = useState<string[]>([]);

  return (
    <div className="absolute w-full h-full top-0 bottom-0 pt-14 p-4 pb-6">
      <div>
        <CommandBox
          onEnterPressed={(value: string) => {
            allInputedCommands.push(value);
          }}
        />
        {allInputedCommands.map((value: string, index: number) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}

export default Body;
