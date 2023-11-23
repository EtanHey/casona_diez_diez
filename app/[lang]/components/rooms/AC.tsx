import React from "react";
import MDACLogo from "../svgs/RoomsSVGs/MDACLogo";
import { VariedColorsSVGProps } from "@/app/[lang]/props";

const AC = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDACLogo fill={fill} />
      Aire A.
    </span>
  );
};

export default AC;
