import React from "react";
import MDCleanLogo from "../svgs/RoomsSVGs/MDCleanLogo";
import { VariedColorsSVGProps } from "@/app/[lang]/props";

const Clean = ({ text,fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDCleanLogo fill={fill} />
      {text}
    </span>
  );
};

export default Clean;
