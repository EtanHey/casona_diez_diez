import React from "react";
import MDBalconyLogo from "../svgs/RoomsSVGs/MDBalconyLogo";
import { VariedColorsSVGProps } from "@/app/props";

const Balcony = ({ text, fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDBalconyLogo fill={fill} />
      {text}
    </span>
  );
};

export default Balcony;
