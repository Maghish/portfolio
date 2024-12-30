export default function ExperienceModal({
  name,
  description,
  startDate,
  endDate,
  techstacks,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  techstacks: string[];
}) {
  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full overflow-auto bg-white bg-opacity-15 backdrop-blur-lg flex justify-center items-center">
      <div className="bg-black rounded-lg w-[400px] h-[500px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[480px] xl:h-[600px] border-white border-2">
        <h2 className="text-center text-xl font-bold text-white">{name}</h2>
        <p className="text-center text-sm text-white">{description}</p>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-center text-xs text-white">
            {startDate} - {endDate}
          </p>
          <p className="text-center text-xs text-white">
            {techstacks.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
