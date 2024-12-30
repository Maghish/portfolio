import { IoClose } from "react-icons/io5";
import TechStackTag from "./TechStackTag";

export default function ExperienceModal({
  name,
  description,
  startDate,
  endDate,
  techstacks,
  setModalActive,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  techstacks: string[];
  setModalActive: (value: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    techstacks: string[];
    modalActive: boolean;
  }) => void;
}) {
  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full overflow-auto bg-white bg-opacity-15 backdrop-blur-lg flex justify-center items-center">
      <div className="relative bg-black rounded-lg w-[350px] h-[350px] border-white border-2 px-6 py-8 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-center text-xl font-bold text-white">{name}</h2>
          <p className="text-center text-xs text-white">
            {startDate} - {endDate}
          </p>
        </div>
        <p className="text-center text-white text-base">{description}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-2 items-center justify-center">
          {techstacks.map((value, index) => (
            <TechStackTag name={value} key={index} />
          ))}
        </div>
        <button
          className="absolute top-[16px] right-[12px]"
          onClick={() =>
            setModalActive({
              name,
              description,
              startDate,
              endDate,
              techstacks,
              modalActive: false,
            })
          }
        >
          <IoClose color="white" size={20} />
        </button>
      </div>
    </div>
  );
}
