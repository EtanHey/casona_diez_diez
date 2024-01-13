import React from "react";
import ColoredBreak from "../../ColoredBreak";
import Header from "../../Header";
import HomeSectionWrapper from "./HomeSectionWrapper";
import {
  ACLogo,
  GrillLogo,
  CleanLogo,
  WifiLogo,
  SecureLogo,
  LocationRedLogo,
  CheckinLogo,
  ToiletLogo,
  KitchenLogo,
  BalconyLogo,
} from "@/app/[lang]/components/svgs/HomeServicesSVGs";
import HomeServicesItem from "../../HomeServicesItem";
import { getDictionary } from "@/app/[lang]/dictionaries";

const HomeServicesSec = async ({ locale }: { locale: string }) => {
  const dict = await getDictionary(locale);
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-red" />
      <div className="flex flex-col gap-4">
        <Header>{dict.home.servicesSection.mainText}</Header>
        <div className="mx-4 grid grid-cols-2 justify-center gap-x-14 md:gap-x-28 md:gap-y-8 gap-y-4">
          <HomeServicesItem>
            <ACLogo />
            <span>{dict.home.servicesSection.acText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <GrillLogo />
            <span>{dict.home.servicesSection.grillText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <CleanLogo />
            <span>{dict.home.servicesSection.cleanText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <WifiLogo />
            <span>{dict.home.servicesSection.wifiText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <SecureLogo />
            <span>{dict.home.servicesSection.secureText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <LocationRedLogo />
            <span>{dict.home.servicesSection.locationText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <CheckinLogo />
            <span>{dict.home.servicesSection.checkInText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <ToiletLogo />
            <span>{dict.home.servicesSection.toiletText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <KitchenLogo />
            <span>{dict.home.servicesSection.kitchenText}</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <BalconyLogo />
            <span>{dict.home.servicesSection.balconyText}</span>
          </HomeServicesItem>
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeServicesSec;
