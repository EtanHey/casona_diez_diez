import React from "react";

const DirectionsSection = ({
  header,
  directions,
}: {
  header: string;
  directions: string[];
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="max-w-[60px] whitespace-nowrap text-xs text-cdd-red sm:text-base md:text-lg">
        {header}
      </h5>
      <ul className="flex h-full list-square flex-col justify-around text-xs sm:text-sm md:text-base">
        {directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </ul>
    </div>
  );
};

export default DirectionsSection;
