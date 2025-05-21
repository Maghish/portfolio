import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function HorizontalExp({
  setExpModalData,
}: {
  setExpModalData: (data: any) => void;
}) {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [viewing, setViewing] = useState(false);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setViewing(true);
          }
        });
      },
      { threshold: 1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={experienceRef}
      className="relative flex lg:hidden flex-row w-full min-h-[200px] max-h-[200px] pt-5 items-center justify-start"
    >
      <div className="flex flex-row w-full min-h-100% items-center justify-evenly">
        <button
          className="relative z-10 rounded-full w-4 h-4 bg-primaryColor cursor-pointer transition-all duration-[900ms] hover:scale-150 group hover:shadow-exp-btn-shadow"
          onClick={() =>
            setExpModalData({
              name: "Legend Bot",
              description:
                "Legend Bot is a Discord bot that helps you manage your discord server.",
              startDate: "11/2024",
              endDate: "Present",
              techstacks: [
                "Discord.js",
                "JavaScript",
                "Node.js",
                "PostgreSQL",
                "TypeScript",
              ],
              modalActive: true,
            })
          }
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75 font-inter-bold">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </button>
        <button
          className="relative z-10 rounded-full w-4 h-4 bg-primaryColor cursor-pointer transition-all duration-[900ms] hover:scale-150 group hover:shadow-exp-btn-shadow"
          onClick={() =>
            setExpModalData({
              name: "Nyaru",
              description:
                "Nyaru is a multi-purpose discord bot owned by Nyaru Inc. A very good helpful bot to manage your servers!",
              startDate: "5/2024",
              endDate: "Present",
              techstacks: ["Discord.js", "JavaScript", "Node.js", "MongoDB"],
              modalActive: true,
            })
          }
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75 font-inter-bold">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </button>
        <button
          className="relative z-10 rounded-full w-4 h-4 bg-primaryColor cursor-pointer transition-all duration-[900ms] hover:scale-150 group hover:shadow-exp-btn-shadow font-inter-bold"
          onClick={() =>
            setExpModalData({
              name: "DeliverEase",
              description:
                "An open-source platform for delivery partners to manage their deliveries and connect with buyers more efficiently. Owned by TeamCodeArena",
              startDate: "8/2023",
              endDate: "4/2024",
              techstacks: ["JavaScript", "Python", "Django", "CSS"],
              modalActive: true,
            })
          }
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </button>
      </div>

      <div
        ref={line}
        className={`absolute h-[4px] bg-stone-900 transition-all duration-[1000ms] ease-in-out w-[0px] ${
          viewing ? "!w-full" : ""
        }`}
      />
    </div>
  );
}
