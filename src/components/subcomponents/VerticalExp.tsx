import { useEffect, useRef, useState } from "react";

export default function VerticalExp() {
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
      <div
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1000ms] ease-out ${
          viewing ? `translate-y-[-500px]` : ""
        }`}
      >
        <div
          className={`relative z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear h-[4px] w-0 ${
            viewing ? "!w-[50px] translate-x-[-50px]" : ""
          }`}
        >
          <div
            className={`relative left-[-200px] top-[-50px] z-10 rounded-md bg-[#686868] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
              viewing ? "!opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1100ms] ease-out ${
          viewing ? `translate-y-[-400px]` : ""
        }`}
      >
        <div
          className={`relative z-0 left-[16px] rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear h-[4px] w-0 ${
            viewing ? "!w-[50px]" : ""
          }`}
        >
          <div
            className={`relative right-[-50px] top-[-50px] z-10 rounded-md bg-[#686868] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
              viewing ? "!opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1200ms] ease-out ${
          viewing ? `translate-y-[-300px]` : ""
        }`}
      >
        <div
          className={`absolute z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear h-[4px] w-0 ${
            viewing ? "!w-[50px] translate-x-[-50px]" : ""
          }`}
        >
          <div
            className={`relative left-[-200px] top-[-50px] z-10 rounded-md bg-[#686868] transition-all delay-[1600ms] duration-[200ms] ease-linear h-[100px] w-[200px] ${
              viewing ? "!opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <div
        ref={line}
        className={`absolute left-1/2 -translate-x-1/2 w-[4px] bg-[#686868] transition-all duration-[1000ms] ease-in-out h-[0px] ${
          viewing ? "!h-full" : ""
        }`}
      />
    </div>
  );
}
