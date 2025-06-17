"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { homeMockupBase64Src } from "@/lib/home-mockup-base64";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { VerifiedIcon } from "@/icons";

const HomeSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    isHeroSection
    isLeftCornerGradient
    isRightCornerGradient
    className="flex-col lg:flex-row gap-y-12"
    {...props}
  >
    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <div
        className="pl-6 pr-9 py-3 rounded-full text-white bg-gradient-to-r from-[#008234] to-[#0c8103] flex items-center gap-3"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        <VerifiedIcon className="size-12 bg-white text-primary rounded-full p-2" />
        <div className="flex flex-col gap-y-1 leading-tight">
          <h3 className="text-sm font-bold">No.1 VPN in 2025</h3>
          <p className="text-sm font-medium">by tech reviewers</p>
        </div>
      </div>
      <h1
        className="text-5xl md:text-6xl font-extrabold leading-tight"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        The best VPN service for online security
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
        className="text-default-500 text-xl font-medium flex flex-col gap-y-2 list-disc ml-5"
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
        className="self-center sm:self-start"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
      >
        Get Started for Free
      </Button>
    </div>
    <div
      className="lg:w-2/5 w-full flex items-center justify-center"
      data-aos="fade-left"
      data-aos-offset="25"
    >
      <Image
        className="max-w-80 w-full h-auto"
        src="/home-mockup.png"
        alt="image not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={homeMockupBase64Src}
      />
    </div>
  </Section>
);

export default HomeSection;
