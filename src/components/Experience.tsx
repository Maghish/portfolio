import { useEffect, useRef, useState } from "react";

export default function Experience() {
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
      className="relative hidden md:flex w-full min-h-[500px] max-h-[600px] justify-center pt-16 items-end"
    >
      <div
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1000ms] ease-out ${
          viewing ? `translate-y-[-500px]` : ""
        }`}
      >
        <div
          className={`absolute z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear h-[4px] w-0 ${
            viewing ? "!w-[50px] translate-x-[-50px]" : ""
          }`}
        />
      </div>
      <div
        className={`absolute z-10 rounded-full w-4 h-4 inline-flex items-center justify-content-center bg-[#8B5CF6] transition-all duration-[1100ms] ease-out ${
          viewing ? `translate-y-[-400px]` : ""
        }`}
      >
        <div
          className={`absolute z-0 rounded-md bg-[#686868] transition-all delay-[1100ms] duration-[600ms] ease-linear h-[4px] w-0 ${
            viewing ? "!w-[50px] translate-x-[-50px]" : ""
          }`}
        />
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
        />
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
