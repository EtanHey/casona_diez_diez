import React from "react";
import MDToiletLogo from "../svgs/RoomsSVGs/MDToiletLogo";
import { VariedColorsSVGProps } from "@/app/props";

const PrivateBathrooms = ({ fill, text }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDToiletLogo fill={fill} />
      {text}
    </span>
  );
};

export default PrivateBathrooms;
