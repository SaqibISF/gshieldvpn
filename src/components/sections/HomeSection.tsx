"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { homeMockupBase64Src } from "@/lib/home-mockup-base64";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { BoltIcon, LocationCheckIcon } from "@/icons";
import { homeSectionLogoBase64 } from "@/lib/home-section-logo-base64";

const HomeSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    isHeroSection
    isLeftCornerGradient
    isRightCornerGradient
    className="flex-col lg:flex-row gap-y-4"
    {...props}
  >
    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <Image
        className="w-48 h-auto"
        src="/home-section-logo.png"
        alt="image not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={homeSectionLogoBase64}
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      />
      <h1
        className="text-5xl md:text-6xl font-extrabold leading-tight"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        The best{" "}
        <span
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#008234] to-[#0c8103]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="25"
        >
          VPN
        </span>{" "}
        service for online security
      </h1>

      <span
        className="text-2xl font-semibold"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        Get started risk free
      </span>

      <ul
        className="text-default-500 text-xl text-start font-medium flex flex-col gap-y-2 list-disc ml-5"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        <li>One of the fastest VPNs in the world.</li>
        <li>Secures up to 10 devices with a single account.</li>
        <li>Helps you avoid phishing, scams, and malware.</li>
      </ul>
      <Button
        as={Link}
        href={PRICING_PAGE_PATH}
        color="primary"
        variant="shadow"
        radius="full"
        size="lg"
        className="self-center sm:self-start z-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
      >
        Get Started for Free
      </Button>
    </div>
    <div
      className="lg:w-2/5 w-full flex items-center justify-center relative"
      data-aos="fade-left"
      data-aos-offset="25"
    >
      <Image
        className="max-w-80 w-full h-auto z-10"
        src="/home-mockup.png"
        alt="image not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={homeMockupBase64Src}
      />
    </div>
    <div className="self-start lg:w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-default-500 text-lg font-medium mb-6">
      {[
        { sentence: "Trusted by 147000 users", Icon: LocationCheckIcon },
        { sentence: "4,9/5 on Apps Store", Icon: BoltIcon },
        { sentence: "Built for speed", Icon: BoltIcon },
      ].map(({ sentence, Icon }, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <Icon />
          {sentence}
        </div>
      ))}
    </div>
  </Section>
);

export default HomeSection;
