import Link from "next/link";
import React from "react";
import BackArrowSVG from "./svgs/BackArrowSVG";

const BackButton = () => {
  return (
    <Link className="pl-2 place-self-start" href="javascript:history.back()">
      <BackArrowSVG />
    </Link>
  );
};

export default BackButton;
