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
import { getDictionary } from "@/app/[lang]/dictionaries";

const HomeWelcomeSec = async ({ locale }: { locale: string }) => {
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col">
      <Header>{dict.home.welcomeSection.mainText}!</Header>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-end justify-items-center gap-y-4">
          <EnglishHead />
          <FrenchHead />
          <ItalianHead />
          <GermanHead />
          <HebrewHead />
          <PortugueseHead />
        </div>
        <p className="text-center md:text-lg sm:text-base text-sm">
          {dict.home.welcomeSection.subText}
        </p>
      </div>
    </div>
  );
};

export default HomeWelcomeSec;
