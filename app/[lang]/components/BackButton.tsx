"use client";
import React from "react";
import BackArrowSVG from "./svgs/BackArrowSVG";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <button className="place-self-start pl-2" onClick={goBack}>
      <BackArrowSVG />
    </button>
  );
};

export default BackButton;
