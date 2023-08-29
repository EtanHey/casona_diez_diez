import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  changeZoom: () => void;
};

const Modal = ({ children, changeZoom }: ModalProps) => {
  return (
    <div onClick={changeZoom} className="fixed inset-0 z-50 bg-black/40">
      <span className="absolute left-1/2 top-1/2 h-30/40 w-39/40 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
    </div>
  );
};

export default Modal;
