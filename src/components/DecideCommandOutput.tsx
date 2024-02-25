import { CommandAsProp } from "../vite-env";

import Start from "./cmd-outputs/Start";

function DecideCommandOutput({ command }: CommandAsProp) {
  if (command.startsWith("start") && command.trimEnd().endsWith("start")) {
    return <Start />;
  } else {
    return (
      <div className="command-output-field">
        <p className="font-consolas text-[#DCDFE4] font-extrabold">
          bash: {command}: command not found
        </p>
      </div>
    );
  }
}

export default DecideCommandOutput;
