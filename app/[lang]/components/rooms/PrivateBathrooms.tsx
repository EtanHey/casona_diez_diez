import React from "react";
import MDToiletLogo from "../svgs/RoomsSVGs/MDToiletLogo";
import { VariedColorsSVGProps } from "@/app/[lang]/props";

const PrivateBathrooms = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDToiletLogo fill={fill} />
      Baño privado
    </span>
  );
};

export default PrivateBathrooms;
