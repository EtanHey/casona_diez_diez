import React from "react";

const NextArrowSVG = ({ arrowColor }: { arrowColor: string }) => {
  return (
    <svg
      width="27"
      height="42"
      viewBox="0 0 27 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_27_440)">
        <path
          d="M5 37L22 20.7236L5.56911 5"
          stroke={arrowColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_27_440"
          x="-4.29153e-06"
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
            result="effect1_dropShadow_27_440"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_27_440"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NextArrowSVG;
