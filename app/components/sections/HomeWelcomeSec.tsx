import React from "react";
import CddDarkLogo from "../svgs/CddDarkLogo";
import Image from "next/image";

const HomeWelcomeSec = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative h-fit w-fit left-1/2 -translate-x-1/2">
        <Image
        className=""
          src={"/hero_picture.jpg"}
          alt="Loby picture"
          height={303.552}
          width={458.30400000000003} 
        />
        <div className="tint w-full h-full bg-[#721800] opacity-30 fixed top-0 z-10"></div>
        <CddDarkLogo className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
      </div>
    </div>
  );
};

export default HomeWelcomeSec;
