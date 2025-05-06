import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const Europe: FC<IconSvgProps> = ({ size = 60, width, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx="30" cy="30" r="30" fill="url(#pattern0_362_508)" />
    <defs>
      <pattern
        id="pattern0_362_508"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_362_508" transform="scale(0.0166667)" />
      </pattern>
      <image
        id="image0_362_508"
        width="60"
        height="60"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Europe;
