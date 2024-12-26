import { useEffect, useRef, useState } from "react";

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
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B5CF6] cursor-pointer transition-all duration-[150ms] hover:scale-150">
          {/* <div
            className={`relative bottom-0 z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear w-[4px] h-0 ${
              viewing ? "!h-[16px] translate-y-[16px]" : ""
            }`}
          >
            <div
              className={`relative top-[15px] -left-[100px] z-10 rounded-md bg-[#ff0404] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
                viewing ? "!opacity-100" : "opacity-0"
              }`}
            ></div>
          </div> */}
        </div>
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B5CF6]  cursor-pointer transition-all duration-[150ms] hover:scale-150">
          {/* <div
            className={`relative top-0 z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear w-[4px] h-0 ${
              viewing ? "!h-[16px] -translate-y-[16px]" : ""
            }`}
          >
            <div
              className={`relative right-[-50px] top-[-50px] z-10 rounded-md bg-[#686868] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
                viewing ? "!opacity-0" : "opacity-0"
              }`}
            ></div>
          </div> */}
        </div>
        <div className="relative z-10 rounded-full w-4 h-4 bg-[#8B4CF6]  cursor-pointer transition-all duration-[150ms] hover:scale-150">
          {/* <div
            className={`relative bottom-0 z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear w-[4px] h-0 ${
              viewing ? "!h-[16px] translate-y-[16px]" : ""
            }`}
          >
            <div
              className={`relative top-[15px] -left-[100px] z-10 rounded-md bg-[#ff0000] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
                viewing ? "!opacity-100" : "opacity-0"
              }`}
            ></div>
          </div> */}
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
