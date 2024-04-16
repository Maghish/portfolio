import { TechStackTagComponent } from "../vite-env";

function TechStackTag({ name }: TechStackTagComponent) {
  return (
    <div className="bg-borderContrastGreenColor font-extrabold font-consolas text-black text-sm sm:text-base h-fit w-fit px-2 rounded-md cursor-pointer mr-2 mb-2 transition delay-75 ease-out hover:scale-[1.1]">
      {name}
    </div>
  );
}

export default TechStackTag;
