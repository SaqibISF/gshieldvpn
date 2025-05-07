"use client";
import React, { FC } from "react";
import {
  AboutSection,
  DownloadSection,
  FactsSection,
  FAQSection,
  FeaturesSection,
  HomeSection,
  InstallingSection,
  PricingSection,
} from "@/components/sections";
import { Divider } from "@heroui/react";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <Divider className="h-2" />
      <FeaturesSection isLeftCornerGradient />
      <Divider className="h-2" />
      <AboutSection isRightCornerGradient isLeftCornerGradient />
      <Divider className="h-2" />
      <DownloadSection isRightCornerGradient />
      <Divider className="h-2" />
      <PricingSection isLeftCornerGradient />
      <Divider className="h-2" />
      <InstallingSection isRightCornerGradient />
      <Divider className="h-2" />
      <FactsSection isLeftCornerGradient />
      <Divider className="h-2" />
      <FAQSection isRightCornerGradient isCenterGradient />
    </>
  );
};

export default HomePage;
