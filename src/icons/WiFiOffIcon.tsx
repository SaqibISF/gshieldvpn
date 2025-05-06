import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const WiFiOffIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 32 28"
    fill="none"
    {...props}
  >
    <path
      d="M26.0001 13.8944C24.6275 12.4223 22.9467 11.2715 21.0779 10.524M31 9.23184C28.9409 7.02378 26.4197 5.29755 23.6167 4.17634C20.8135 3.05514 17.7974 2.56621 14.7836 2.74526M9.74953 19.1011C10.7972 17.9776 12.1282 17.1572 13.6026 16.7265C15.0771 16.2956 16.6405 16.269 18.1282 16.6517M6.00069 13.8937C7.62162 12.1555 9.66765 10.8699 11.937 10.1635M1 9.23148C2.53462 7.5858 4.32959 6.20387 6.31295 5.14109M3.03466 1L27.2061 25.1714M16.0004 26.6377C15.0564 26.6377 14.2912 25.8725 14.2912 24.9285C14.2912 23.9845 15.0564 23.2193 16.0004 23.2193C16.9444 23.2193 17.7096 23.9845 17.7096 24.9285C17.7096 25.8725 16.9444 26.6377 16.0004 26.6377Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WiFiOffIcon;
