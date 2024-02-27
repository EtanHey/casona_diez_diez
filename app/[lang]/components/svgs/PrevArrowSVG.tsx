import React from "react";

const PrevArrowSVG = ({ arrowColor }: { arrowColor: string }) => {
  return (
    <svg
      width="27"
      height="42"
      viewBox="0 0 27 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_27_441)">
        <path
          d="M22 37L5 20.7236L21.4309 5"
          stroke={arrowColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_27_441"
          x="0"
          y="-3.8147e-06"
          width="27"
          height="42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.0431373 0 0 0 0 0.0235294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_27_441"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_27_441"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PrevArrowSVG;
