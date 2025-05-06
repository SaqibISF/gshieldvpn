"use client";
import React, { FC } from "react";
import {
  AboutSection,
  DownloadSection,
  FactsSection,
  FAQSection,
  FeaturesSection,
  HomeSection,
  PricingSection,
} from "@/components/sections";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <DownloadSection isRightCornerGradient />
      <PricingSection isLeftCornerGradient isCenterGradient />
      <FactsSection />
      <FAQSection isRightCornerGradient />
    </>
  );
};

export default HomePage;
