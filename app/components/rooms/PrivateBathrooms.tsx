import React from "react";
import MDToiletLogo from "../svgs/RoomsSVGs/MDToiletLogo";

const PrivateBathrooms = ({ fill }: { fill: string }) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDToiletLogo fill={fill} />
      Baño privado
    </span>
  );
};

export default PrivateBathrooms;
