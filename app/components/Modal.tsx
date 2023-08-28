import React, { ReactNode } from "react";

const Modal = ({
  children,
  changeZoom,
}: {
  children: ReactNode;
  changeZoom: () => void;
}) => {
  return (
    <div onClick={changeZoom} className="fixed inset-0 z-50 bg-black/20">
      <span className="h-30/40 absolute left-1/2 top-1/2 w-39/40 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
    </div>
  );
};

export default Modal;
