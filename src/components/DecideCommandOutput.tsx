import { CommandAsProp } from "../vite-env";

import Start from "./cmd-outputs/Start";

function DecideCommandOutput({ command }: CommandAsProp) {
  if (command.startsWith("start") && command.endsWith("start")) {
    return <Start />;
  } else {
    return (
      <p className="font-consolas text-[#DCDFE4] font-semibold">
        bash: command not found: {command}
      </p>
    );
  }
}

export default DecideCommandOutput;
