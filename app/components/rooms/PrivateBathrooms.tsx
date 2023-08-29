import React from "react";
import MDToiletLogo from "../svgs/RoomsSVGs/MDToiletLogo";
import { VariedColorsSVGProps } from "@/app/props";

const PrivateBathrooms = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDToiletLogo fill={fill} />
      Baño privado
    </span>
  );
};

export default PrivateBathrooms;
