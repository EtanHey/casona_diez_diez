import React from "react";
import MDCleanLogo from "../svgs/RoomsSVGs/MDCleanLogo";

const Clean = ({ fill }: { fill: string }) => {
  return (
    <span className="text-2xs flex flex-col items-center gap-1">
      <MDCleanLogo fill={fill} />
      Servicio de limpieza
    </span>
  );
};

export default Clean;
