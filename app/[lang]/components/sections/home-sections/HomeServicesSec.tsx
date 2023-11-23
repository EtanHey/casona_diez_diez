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

const HomeServicesSec = () => {
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-red" />
      <div className="flex flex-col gap-4">
        <Header>Servicios</Header>
        <div className="mx-4 grid grid-cols-2 justify-center gap-x-14 gap-y-4">
          <HomeServicesItem>
            <ACLogo />
            <span>ACONDICIONADOR DE AIRE</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <GrillLogo />
            <span>TERRAZA CON PARRILLA</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <CleanLogo />
            <span>Servicio de limpieza</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <WifiLogo />
            <span>Wifi gratis</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <SecureLogo />
            <span>Seguridad 24 Horas</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <LocationRedLogo />
            <span>Ubicacion Privilegiada</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <CheckinLogo />
            <span>Check in las 24hs</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <ToiletLogo />
            <span>Habitaciones en suite</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <KitchenLogo />
            <span>Cocina Comunitaria</span>
          </HomeServicesItem>
          <HomeServicesItem>
            <BalconyLogo />
            <span>Habitaciones con balcon</span>
          </HomeServicesItem>
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeServicesSec;
