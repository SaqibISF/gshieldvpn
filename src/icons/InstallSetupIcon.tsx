import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const InstallSetupIcon: FC<IconSvgProps> = ({
  size = 44,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 39 40"
    fill="none"
    {...props}
  >
    <path
      d="M22.5495 12.9448L22.1319 15.8679L19.2089 17.1207L16.7034 15.4503L14.1979 18.3734L15.4506 20.4613L14.1979 23.802L11.6924 24.2196V27.9778L14.6155 28.3954L15.4506 30.9009L13.7803 33.824L16.7034 36.7471L19.2089 35.0767L22.1319 36.3295L22.5495 39.2526H26.7253L27.1429 36.3295L29.6484 35.0767L32.1539 36.7471L35.4946 33.824L33.4067 30.9009L34.2418 28.813L38.0001 28.3954V24.2196L34.6594 23.802L33.4067 20.8789L35.077 18.3734L32.5715 15.4503L30.066 17.1207L26.7253 15.8679L26.3078 12.9448H22.5495ZM24.2198 18.791C27.9781 18.791 31.7363 22.1317 31.7363 25.4723C31.7363 30.0657 27.9781 32.9888 24.2198 32.9888C20.4616 32.9888 17.121 30.0657 17.121 25.4723C17.121 22.1317 20.4616 18.791 24.2198 18.791Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.96"
    />
    <path
      d="M15.033 29.6484L28.3956 17.5385H21.7143V0H7.0989V17.5385H0L15.033 29.6484Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
  </svg>
);

export default InstallSetupIcon;
