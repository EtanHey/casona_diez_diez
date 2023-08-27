"use client";
import React from "react";
import {
  CddLightLogo,
  EmailLogo,
  FacebookLogo,
  LocationHallowLogo,
  WazeLogo,
  WhatsappLogo,
} from "../../svgs/HomeMediaSVGs";
import MediaButton from "../../MediaButton";

const HomeMediaSec = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-cdd-black">
      <div className="mt-10 flex h-full w-full flex-col items-center gap-6">
        <CddLightLogo />
        <span className="flex w-[260px] items-center gap-2">
          <LocationHallowLogo />
          <p className="text-sm font-medium text-white">
            Urquiza Gral Justo Jose De 6923, Rosario, Santa Fe, Argentina
          </p>
        </span>
        <span className="mb-12 flex flex-col gap-6">
          <button className="flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-[#05C8F7] font-medium text-white">
            <WazeLogo />
            <p>Navigate to us!</p>
          </button>
          <button className="flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-[#25D366] font-medium text-white">
            <WhatsappLogo />
            <p>Whatapp</p>
          </button>
          <button className="flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-[#4267B2] font-medium text-white">
            <FacebookLogo />
            <p>Facebook</p>
          </button>
          <button className="flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-white font-medium text-cdd-red">
            <EmailLogo />
            <p>Email</p>
          </button>
        </span>
      </div>
      <span className="pb-5 text-xs font-medium text-white">
        All rights reserved 2023 © Casona Diez Diez
      </span>
    </div>
  );
};

export default HomeMediaSec;
