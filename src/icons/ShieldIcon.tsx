import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ShieldIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 32 36"
    fill="none"
    {...props}
  >
    <path
      d="M30.9832 16.3323C30.9832 24.56 25.0101 32.2661 16.8497 34.5207C16.2945 34.6721 15.6888 34.6721 15.1335 34.5207C6.97305 32.2661 1 24.56 1 16.3323V8.9458C1 7.5661 2.0432 6.00134 3.33877 5.47975L12.7106 1.64358C14.8138 0.785474 17.1862 0.785474 19.2894 1.64358L28.6612 5.47975C29.94 6.00134 31 7.5661 31 8.9458L30.9832 16.3323Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShieldIcon;
