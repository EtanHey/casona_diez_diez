import React from "react";
import HeroImage from "../../HeroImage";
import WelcomeEveryone from "../../WelcomeEveryone";

const HomeWelcomeSec = () => {
  return (
    <div className="flex h-full w-full flex-col gap-16">
      <HeroImage />
      <WelcomeEveryone />
    </div>
  );
};

export default HomeWelcomeSec;
