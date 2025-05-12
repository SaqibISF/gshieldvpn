"use client";

import React, { FC } from "react";
import { Section } from "../sections";
import AllServersTable from "@/components/AllServersTable";

const ServersPage: FC = () => (
  <Section
    isHeroSection
    isRightCornerGradient
    isCenterGradient
    title="Servers"
    heading="VPN Server Locations"
    description="Choose a server location to connect to. Your IP address and browsing activity will appear as if you are in the selected country."
  >
    <AllServersTable />
  </Section>
);

export default ServersPage;
