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
    <div className="absolute top-0 left-0 min-w-full min-h-full overflow-auto bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center animate-fade-in-scale">
      <div className="relative bg-black bg-opacity-75 backdrop-blur-xl rounded-lg w-[350px] h-[350px] px-6 py-8 flex flex-col items-center justify-between shadow-tech-stack-tag-shadow">
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
