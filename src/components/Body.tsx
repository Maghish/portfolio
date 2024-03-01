import Infobar from "./Infobar";
import Profilebar from "./Profilebar";
import Statsbar from "./Statsbar";

function Body() {
  return (
    <div className="flex flex-row w-full min-h-[560px] justify-center">
      <Infobar />
      <Profilebar />
      <Statsbar />
    </div>
  );
}

export default Body;
