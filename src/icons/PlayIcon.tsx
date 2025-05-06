import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const PlayIcon: FC<IconSvgProps> = ({ size = 32, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 27 31"
    fill="none"
    {...props}
  >
    <path
      d="M21.4869 10.8096C24.0171 12.365 25.282 13.1426 25.7158 14.1384C26.0947 15.0078 26.0947 15.9922 25.7158 16.8618C25.282 17.8574 24.0171 18.635 21.4869 20.1905L9.60372 27.4957C6.79565 29.222 5.39161 30.0852 4.23295 29.9934C3.223 29.9135 2.2972 29.409 1.69308 28.6089C1 27.691 1 26.0625 1 22.8053V8.19478C1 4.93767 1 3.30913 1.69308 2.39125C2.2972 1.59117 3.223 1.08648 4.23295 1.0066C5.39161 0.914993 6.79565 1.77813 9.60372 3.50439L21.4869 10.8096Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
