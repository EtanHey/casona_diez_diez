import React from "react";

const ColoredBreak = ({ bg }: { bg: string }) => {
  return <div className={`mt-8 mb-6 h-[5px] w-37/40 place-self-center rounded-full ${bg}`}></div>;
};

export default ColoredBreak;
