import React, { FC } from "react";
import Section, { SectionTitle } from "./Section";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";
import { laptopBase64Src } from "@/lib/laptop-base64";
import { CheckedIcon } from "@/icons";

const AboutSection: FC = () => (
  <Section className="flex-col-reverse lg:flex-row gap-y-12">
    <div
      className="lg:w-2/5 w-full flex items-center justify-center"
      data-aos="fade-right"
    >
      <Image
        className="max-w-md w-full h-auto"
        src="/laptop.png"
        alt="image not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={laptopBase64Src}
      />
    </div>

    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <SectionTitle className="mb-0">About Us</SectionTitle>

      <h2
        className="sm:text-5xl text-4xl font-bold !leading-[3.5rem] md:!leading-[4.5rem]"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Safeguarding Your Online World with Trust
      </h2>

      <p
        className="text-default-500 text-xl leading-8 capitalize"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        At GShield, we are dedicated to delivering safe, private, and limitless
        internet access to users across the globe.
      </p>

      <div className="flex flex-col gap-2">
        <h6
          className="text-xl w-full font-semibold flex gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <CheckedIcon className="text-primary" /> Enhanced Privacy & Security
        </h6>

        <p
          className="text-default-500 text-lg leading-8 mb-3 mx-4 text-start"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          GShield encrypts your internet traffic, keeping your online activities
          private and secure, protecting you from hackers and cyber threats.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h6
          className="text-xl w-full font-semibold flex gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <CheckedIcon className="text-primary" /> Fast & Reliable Connection
        </h6>

        <p
          className="text-default-500 text-lg leading-8 mb-3 mx-4 text-start"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          GShield encrypts your internet traffic, keeping your online activities
          private and secure, protecting you from hackers and cyber threats.
        </p>
      </div>

      <Button
        as={Link}
        href={DOWNLOADS_PAGE_PATH}
        color="primary"
        variant="shadow"
        size="lg"
        radius="full"
        className="self-center sm:self-start"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Get it now
      </Button>
    </div>
  </Section>
);

export default AboutSection;
