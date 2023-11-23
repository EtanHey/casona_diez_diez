import React, { ReactNode } from "react";

const HomeSectionWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-full w-full flex-col items-center">{children}</div>;
};

export default HomeSectionWrapper;
