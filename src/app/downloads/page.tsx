"use client";

import React, { FC } from "react";
import {
  AvailableDevicesSection,
  DownloadSection,
} from "@/components/sections";

const DownloadsPage: FC = () => (
  <>
    <DownloadSection isHeroSection isRightCornerGradient isCenterGradient />

    <AvailableDevicesSection />
  </>
);

export default DownloadsPage;
