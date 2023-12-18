import Link from "next/link";
import React from "react";

const ReserveButton = ({text}:{text:string}) => {
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=17179629684&text=Hola%21%20%F0%9F%8F%A8%20%C2%BFTienen%20disponibilidad%20para%20%5Bfechas%5D%20para%20%5Bn%C3%BAmero%20de%20hu%C3%A9spedes%5D%20en%20una%20%5Btipo%20de%20habitaci%C3%B3n%5D%3F%20Por%20favor%2C%20compartan%20las%20tarifas%20y%20cualquier%20oferta%20especial.%20%C2%A1Gracias%21%20%F0%9F%8C%9F`}
      target="_blank"
      className="absolute left-1/2 top-21/40 -translate-x-1/2 rounded-full bg-cdd-red px-4 py-[10px] font-medium uppercase text-white"
    >
      {text}
    </Link>
  );
};

export default ReserveButton;
