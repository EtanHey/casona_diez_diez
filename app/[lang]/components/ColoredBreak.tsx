import React from "react";

const ColoredBreak = ({ bg, small }: { bg: string; small?: boolean }) => {
  return (
    <div
      className={` place-self-center rounded-full ${bg} 
        ${small ? "my-4 h-[1px] w-33.5/40" : "mb-6 mt-8 h-[5px] w-37/40"}`}
    ></div>
  );
};

export default ColoredBreak;
