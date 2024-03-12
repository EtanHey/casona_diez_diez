import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-72 py-20">{children}</div>
  );
};

export default layout;
