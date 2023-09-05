import React from "react";
import PhoneLogo from "../svgs/PhoneLogo";
import Link from "next/link";

const CallReservationButton = () => {
  return (
    <Link
      className="flex flex-row place-items-center gap-[6px]"
      href="tel:2025550122"
      target="_blank"
    >
      <PhoneLogo />
      <div className="m-0 p-0 text-xs font-light text-white">
        RESERVA UNA HABITACIÓN
      </div>
    </Link>
  );
};

export default CallReservationButton;
