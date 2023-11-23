import React from "react";
import MDBalconyLogo from "../svgs/RoomsSVGs/MDBalconyLogo";
import { VariedColorsSVGProps } from "@/app/[lang]/props";

const Balcony = ({ fill }: VariedColorsSVGProps) => {
  return (
    <span className="flex flex-col items-center gap-1 text-2xs">
      <MDBalconyLogo fill={fill} />
      BALCÓN
    </span>
  );
};

export default Balcony;
