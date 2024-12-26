import { useState, useEffect } from "react";
import HorizontalExp from "./subcomponents/HorizontalExp";
import VerticalExp from "./subcomponents/VerticalExp";

export default function Experience() {
  // const [isLgScreen, setIsLgScreen] = useState(window.innerWidth <= 1024);

  // const handleResize = () => {
  //   setIsLgScreen(window.innerWidth >= 1024);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <HorizontalExp />
      <VerticalExp />
    </>
  );
  // return <></>;
}
