"use client";

import React, { ReactNode } from "react";

const MediaButton = ({
  children,
  onClick,
  buttonColor,
  buttonTextColor,
}: {
  children: ReactNode;
  onClick: () => void;
  buttonColor: string;
  buttonTextColor: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-12 w-48 items-center justify-center gap-2 rounded-full font-medium bg-[${buttonColor}] text-[${buttonTextColor}]`}
    >
      {children}
    </button>
  );
};

export default MediaButton;
