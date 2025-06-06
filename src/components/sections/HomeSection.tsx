"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { mockupBase64Src } from "@/lib/mockup-base64";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";

const HomeSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    isHeroSection
    isLeftCornerGradient
    isRightCornerGradient
    className="flex-col lg:flex-row gap-y-12"
    {...props}
  >
    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <h1
        className="text-5xl md:text-7xl font-bold leading-[3.5rem] md:leading-[5rem]"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        Stay{" "}
        <span
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#008234] to-[#0c8103]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="25"
        >
          Private
        </span>{" "}
        and Access Worldwide Content
      </h1>
      <p
        className="text-default-500 text-2xl font-medium leading-10"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        Surf the web without tracking with a VPN, protect your devices &
        identity with an all-in-one app.
      </p>
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
        Get Started
      </Button>
    </div>
    <div
      className="lg:w-2/5 w-full flex items-center justify-center"
      data-aos="fade-left"
      data-aos-offset="25"
    >
      <Image
        className="max-w-64 w-full h-auto"
        src="/mockup.png"
        alt="image not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={mockupBase64Src}
      />
    </div>
  </Section>
);

export default HomeSection;
