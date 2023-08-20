import React from "react";
import PhoneLogo from "../svgs/PhoneLogo";
import Link from "next/link";

const CallReservationButton = () => {
  return (
    <Link className="flex flex-row gap-[6px] place-items-center" href="tel:2025550122">
      <PhoneLogo />
      <div className="text-xs font-light p-0 m-0 text-white">RESERVA UNA HABITACIÓN</div>
    </Link>
  );
};

export default CallReservationButton;
