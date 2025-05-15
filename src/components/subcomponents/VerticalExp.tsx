import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function VerticalExp({
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
      className="relative hidden lg:flex w-full min-h-[500px] max-h-[600px] justify-center pt-16 items-end"
    >
      <button
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1000ms] ease-out hover:scale-110 ${
          viewing ? `translate-y-[-500px]` : ""
        } group`}
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-100 font-inter-bold">
          Click to view!
          <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700 scale-125" />
        </div>
      </button>
      <button
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1100ms] ease-out hover:scale-110 ${
          viewing ? `translate-y-[-400px]` : ""
        } group`}
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-100 font-inter-bold">
          Click to view!
          <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700 scale-125" />
        </div>
      </button>
      <button
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1200ms] ease-out hover:scale-110 ${
          viewing ? `translate-y-[-300px]` : ""
        } group`}
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-100 font-inter-bold">
          Click to view!
          <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700 scale-125" />
        </div>
      </button>

      <div
        ref={line}
        className={`absolute left-1/2 -translate-x-1/2 w-[4px] bg-[#686868] transition-all duration-[1000ms] ease-in-out h-[0px] ${
          viewing ? "!h-full" : ""
        }`}
      />
    </div>
  );
}
