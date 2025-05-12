"use client";

import React, { FC } from "react";
import { Section } from "../sections";
import AvailableDevices from "../AvailableDevices";

const DownloadsPage: FC = () => (
  <>
    <Section
      isHeroSection
      title="Download"
      heading="Download The Fastest VPN For All Your Devices"
      description="High speed, low latency, support for up to 10 devices, strong encryption, and built-in threat protection — all in one."
      isRightCornerGradient
      isLeftCornerGradient
    >
      <AvailableDevices />
    </Section>
  </>
);

export default DownloadsPage;
