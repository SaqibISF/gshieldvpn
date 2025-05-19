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
  SectionDivider,
} from "@/components/sections";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <SectionDivider />
      <FeaturesSection isLeftCornerGradient />
      <SectionDivider />
      <AboutSection isRightCornerGradient isLeftCornerGradient />
      <SectionDivider />
      <DownloadSection isRightCornerGradient />
      <SectionDivider />
      <PricingSection isLeftCornerGradient />
      <SectionDivider />
      <InstallingSection isRightCornerGradient />
      <SectionDivider />
      <FactsSection isLeftCornerGradient />
      <SectionDivider />
      <FAQSection isRightCornerGradient isCenterGradient />
    </>
  );
};

export default HomePage;
