import React from "react";

import Header from "../../Header";
import {
  EnglishHead,
  FrenchHead,
  ItalianHead,
  GermanHead,
  HebrewHead,
  PortugueseHead,
} from "../../svgs/HomeHeadsSVGs";
import { getDictionary } from "@/app/[lang]/dictionary";

const HomeWelcomeSec = async ({ locale }: { locale: string }) => {
  const dict = await getDictionary(locale);
  // console.log("dict", dict);
  return (
    <div className="flex flex-col">
      <Header>{dict.home.welcome}!</Header>
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
          {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod */}
          {/* ¡Bienvenidos a nuestro rincón familiar en Rosario, Argentina! */}
          ¡Abrimos las puertas de nuestra casona familiar en el corazón de
          Rosario, Argentina! ¡Bienvenidos!
        </p>
      </div>
    </div>
  );
};

export default HomeWelcomeSec;
