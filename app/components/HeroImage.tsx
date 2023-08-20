import Image from "next/image";
import React from "react";
import CddDarkLogo from "./svgs/CddDarkLogo";

const HeroImage = () => {
  return (
    <div className="relative left-1/2 h-fit max-h-80 w-[458.30400000000003px] -translate-x-1/2 overflow-hidden md:w-fit">
      <Image
        className="md:-translate-y-1/4 lg:-translate-y-1/2 xl:-translate-y-1/3"
        src={"/hero_picture.jpg"}
        alt="Loby picture"
        height={303.552}
        width={458.30400000000003}
        layout="responsive"
      />
      <div className="tint fixed top-0 z-10 h-full w-full bg-[#721800] opacity-30"></div>
      <CddDarkLogo className="absolute left-1/2 top-1/4 z-20 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default HeroImage;
