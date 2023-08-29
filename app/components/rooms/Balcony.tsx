import React from "react";
import MDBalconyLogo from "../svgs/RoomsSVGs/MDBalconyLogo";
import { VariedColorsSVGProps } from "@/app/props";

const Balcony = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDBalconyLogo fill={fill} />
      BALCÓN
    </span>
  );
};

export default Balcony;
