import Infobar from "./Infobar";
import Profilebar from "./Profilebar";
import Statsbar from "./Statsbar";

function Body() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-[560px] justify-center items-center">
      <Infobar />
      <Profilebar />
      <Statsbar />
    </div>
  );
}

export default Body;
