import React from "react";

const ColoredBreak = ({ bg, small }: { bg: string; small?: boolean }) => {
  return (
    <div
      className={` place-self-center rounded-full ${bg} 
        ${small ? "w-33.5/40 my-4 h-[1px]" : "w-37/40 h-[5px] mb-6 mt-8"}`}
    ></div>
  );
};

export default ColoredBreak;
