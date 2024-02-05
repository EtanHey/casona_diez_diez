import React from "react";
import MDACLogo from "../svgs/RoomsSVGs/MDACLogo";
import { VariedColorsSVGProps } from "@/app/[lang]/props";

const AC = ({ text, fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDACLogo fill={fill} />
      {text}
    </span>
  );
};

export default AC;
