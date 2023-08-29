import React from "react";
import MDCleanLogo from "../svgs/RoomsSVGs/MDCleanLogo";
import { VariedColorsSVGProps } from "@/app/props";

const Clean = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDCleanLogo fill={fill} />
      Servicio de limpieza
    </span>
  );
};

export default Clean;
