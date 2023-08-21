import React from "react";
import EnglishHead from "./svgs/EnglishHead";
import FrenchHead from "./svgs/FrenchHead";
import ItalianHead from "./svgs/ItalianHead";
import GermanHead from "./svgs/GermanHead";
import HebrewHead from "./svgs/HebrewHead";
import PortugueseHead from "./svgs/PortugueseHead";

const WelcomeEveryone = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[2rem] font-semibold uppercase">
        Bienvenidos!
      </h1>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-end justify-items-center gap-y-4">
          <EnglishHead />
          <FrenchHead />
          <ItalianHead />
          <GermanHead />
          <HebrewHead />
          <PortugueseHead />
        </div>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </p>
      </div>
      <div className="h-[5px] rounded-full mt-8 w-37/40 bg-cdd-red"></div>
    </div>
  );
};

export default WelcomeEveryone;
