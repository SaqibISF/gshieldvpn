"use client";
import React, { FC } from "react";
import { FeaturesSection, Section, SectionDivider } from "../sections";
import { Button } from "@heroui/react";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";

const FeaturesPage: FC = () => (
  <>
    <Section
      isHeroSection
      heading="GShieldVPN features"
      subtitle="Every ExpressVPN subscription comes jam-packed with privacy and security features to give you a safer, more enjoyable online experience."
      isRightCornerGradient
      isLeftCornerGradient
    >
      <Button
        as={Link}
        href={DOWNLOADS_PAGE_PATH}
        variant="shadow"
        color="primary"
        endContent={<ArrowRightIcon />}
        radius="full"
        size="lg"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
      >
        Get GShieldVPN
      </Button>
    </Section>

    <SectionDivider />

    <FeaturesSection isLeftCornerGradient />
  </>
);

export default FeaturesPage;
