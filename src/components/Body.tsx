import { useEffect, useState, useRef } from "react";
import CommandBox from "./CommandBox";

import DecideCommandOutput from "./DecideCommandOutput";

//  The clear terminal mechanism is a PAIN but it works now so better not ruin anything

function Body() {
  const [allInputedCommands, setAllInputedCommands] = useState<string[]>([]);
  const [allInputOutputFields, setAllInputOutputFields] = useState<any[]>([]);
  const bodyRef = useRef<any>(null);

  useEffect(() => {
    const commandInputFields = bodyRef.current.querySelectorAll(
      ".command-input-field"
    );
    const commandOutputFields = bodyRef.current.querySelectorAll(
      ".command-output-field"
    );
    setAllInputOutputFields([...allInputOutputFields, ...commandOutputFields]);
  }, [bodyRef]);

  const clearTerminal = (ID: string) => {
    allInputOutputFields.forEach((element) => {
      if (element.id.toString() === ID) {
      } else {
        element.remove();
      }
    });
    setAllInputOutputFields([]);
    setAllInputedCommands([]);
    bodyRef.current.getElementByID("none");
  };

  return (
    <div
      className="absolute w-full h-full max-w-full overflow-auto top-0 bottom-0 pt-14 p-4 pb-6"
      ref={bodyRef}
    >
      <CommandBox
        onEnterPressed={(value: string) => {
          setAllInputedCommands([...allInputedCommands, value]);
        }}
      />
      {allInputedCommands.map((value: string, index: number) => {
        if (value.startsWith("clear") && value.trimEnd().endsWith("clear")) {
          clearTerminal("10");
          return (
            <div key={index}>
              <CommandBox
                ID={"10"}
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
