import React from "react";
import MDACLogo from "../svgs/RoomsSVGs/MDACLogo";
import { VariedColorsSVGProps } from "@/app/props";



const AC = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDACLogo fill={fill} />
      Aire A.
    </span>
  );
};

export default AC;
