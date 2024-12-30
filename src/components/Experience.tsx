import { useState, useEffect } from "react";
import HorizontalExp from "./subcomponents/HorizontalExp";
import VerticalExp from "./subcomponents/VerticalExp";

export default function Experience({
  setExpModalData,
}: {
  setExpModalData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      startDate: string;
      endDate: string;
      techstacks: string[];
      modalActive: boolean;
    }>
  >;
}) {
  return (
    <>
      <HorizontalExp setExpModalData={(data: any) => setExpModalData(data)} />
      <VerticalExp />
    </>
  );
}
