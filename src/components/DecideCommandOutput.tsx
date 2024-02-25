import { CommandAsProp } from "../vite-env";

import Start from "./cmd-outputs/Start";

function DecideCommandOutput({ command }: CommandAsProp) {
  if (command.startsWith("start") && command.endsWith("start")) {
    return <Start />;
  } else {
    console.log(command);
  }
}

export default DecideCommandOutput;
