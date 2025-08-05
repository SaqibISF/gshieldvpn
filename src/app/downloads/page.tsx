"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import AvailableDevices from "@/components/AvailableDevices";

const DownloadsPage: FC = () => (
  <>
    <Section
      title="Download"
      heading="Download The Fastest VPN For All Your Devices"
      description="High speed, low latency, support for up to 10 devices, strong encryption, and built-in threat protection — all in one."
      parentClassName="bg-[#00823417]"
      className="pb-0 lg:pb-0 lg:pt-4 pt-4"
    ></Section>

    <Section heading="Available For Download">
      <AvailableDevices />
    </Section>
  </>
);

export default DownloadsPage;
