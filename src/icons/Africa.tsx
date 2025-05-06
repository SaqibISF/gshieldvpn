import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const Africa: FC<IconSvgProps> = ({ size = 60, width, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width="60" height="60" fill="black" />
    <g id="New GShield VPN-Home" clipPath="url(#clip0_133_1890)">
      <rect
        width="1440"
        height="8592"
        transform="translate(-817 -6560)"
        fill="white"
      />
      <g id="united">
        <g id="Africa">
          <rect
            id="Rectangle 827"
            x="-21"
            y="-23"
            width="276"
            height="102"
            rx="10"
            fill="#F5F5F5"
          />
          <rect
            id="Rectangle 828"
            x="-21"
            y="-23"
            width="276"
            height="102"
            rx="10"
            fill="#F5F5F5"
          />
        </g>
        <circle
          id="map-item-1-3"
          cx="30"
          cy="30"
          r="30"
          fill="url(#pattern0_133_1890)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_133_1890"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_133_1890" transform="scale(0.0166667)" />
      </pattern>
      <clipPath id="clip0_133_1890">
        <rect
          width="1440"
          height="8592"
          fill="white"
          transform="translate(-817 -6560)"
        />
      </clipPath>
      <image
        id="image0_133_1890"
        data-name="map-item-1-3.png"
        width="60"
        height="60"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Africa;
