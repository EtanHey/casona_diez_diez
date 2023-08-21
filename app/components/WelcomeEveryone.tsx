import React from "react";
import EnglishHead from "./svgs/EnglishHead";
import FrenchHead from "./svgs/FrenchHead";
import ItalianHead from "./svgs/ItalianHead";
import GermanHead from "./svgs/GermanHead";
import HebrewHead from "./svgs/HebrewHead";
import PortugueseHead from "./svgs/PortugueseHead";
import Header from "./Header";
import ColoredBreak from "./ColoredBreak";

const WelcomeEveryone = () => {
  return (
    <div className="flex flex-col">
      <Header>Bienvenidos!</Header>
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
    </div>
  );
};

export default WelcomeEveryone;
