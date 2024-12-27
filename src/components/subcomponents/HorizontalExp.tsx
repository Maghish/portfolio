import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function HorizontalExp() {
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
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B5CF6] cursor-pointer transition-all duration-[150ms] hover:scale-150 group">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </div>
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B5CF6] cursor-pointer transition-all duration-[150ms] hover:scale-150 group">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </div>
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B4CF6] cursor-pointer transition-all duration-[150ms] hover:scale-150 group">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-5 w-max p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:!scale-75">
            Click to view!
            <FaCaretDown className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 text-gray-700" />
          </div>
        </div>
      </div>

      <div
        ref={line}
        className={`absolute  h-[4px] bg-[#686868] transition-all duration-[1000ms] ease-in-out w-[0px] ${
          viewing ? "!w-full" : ""
        }`}
      />
    </div>
  );
}
