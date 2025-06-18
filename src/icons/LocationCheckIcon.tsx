import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const LocationCheckIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    viewBox="0 0 22 30"
    width={size || width}
    height={size || height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title />
    <g data-name="Layer 2" id="Layer_2">
      <g id="Interface-Solid">
        <path
          fill="currentColor"
          d="M11,0A11.01245,11.01245,0,0,0,0,11C0,21.36133,9.95166,29.44238,10.37549,29.78125a1.00083,1.00083,0,0,0,1.249,0C12.04834,29.44238,22,21.36133,22,11A11.01245,11.01245,0,0,0,11,0Zm5.50391,10.11816-5.07129,8.07129a1.001,1.001,0,0,1-.73438.46192,1.09718,1.09718,0,0,1-.1123.00586,1.00029,1.00029,0,0,1-.707-.293L5.63574,14.12109A.99989.99989,0,1,1,7.0498,12.707l3.35645,3.35645,4.4043-7.00977a1.00007,1.00007,0,0,1,1.69336,1.06445Z"
        />
      </g>
    </g>
  </svg>
);

export default LocationCheckIcon;
