import React from "react";
import HeroImage from "../HeroImage";
import WelcomeEveryone from "../WelcomeEveryone";

const HomeWelcomeSec = () => {
  return (
    <div className="h-full w-full flex flex-col gap-16">
      <HeroImage />
      <WelcomeEveryone />
    </div>
  );
};

export default HomeWelcomeSec;
