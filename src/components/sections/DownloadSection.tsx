import React, { FC } from "react";
import Section, { SectionProps, SectionTitle } from "./Section";
import { Button } from "@heroui/react";
import Image from "next/image";
import { mockupBase64Src } from "@/lib/mockup-base64";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";

const DownloadSection: FC<SectionProps> = ({ ...props }) => (
  <Section className="flex-col lg:flex-row gap-y-12" {...props}>
    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <SectionTitle className="mb-0">Download Mobile App</SectionTitle>

      <h2
        className="sm:text-5xl text-4xl font-bold !leading-[3.5rem] md:!leading-[4.5rem]"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        Download The Fastest Vpn App Secure Your Internet
      </h2>

      <p
        className="text-default-500 text-xl leading-8 capitalize"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        At GShield, we are committed to providing secure, private, and
        unrestricted internet access to our users worldwide. In an age where
        online privacy is more important than ever, our mission is to protect
        your personal data.
      </p>

      <Button
        as={Link}
        href={DOWNLOADS_PAGE_PATH}
        color="primary"
        variant="shadow"
        radius="full"
        size="lg"
        className="self-center sm:self-start"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
      >
        Download App
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

export default DownloadSection;
