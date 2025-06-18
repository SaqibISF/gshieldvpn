import React, { FC } from "react";
import Section, { SectionProps, SectionTitle } from "./Section";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";
import { laptopBase64Src } from "@/lib/laptop-base64";
import { CheckedIcon } from "@/icons";

const AboutSection: FC<SectionProps> = ({ ...props }) => (
  <Section className="flex-col-reverse lg:flex-row gap-y-12" {...props}>
    <div
      className="lg:w-2/5 w-full flex items-center justify-center"
      data-aos="fade-right"
      data-aos-offset="25"
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
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        Safeguarding Your Online World with Trust
      </h2>

      <p
        className="text-default-500 text-xl leading-8 capitalize"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        At GShield, we are dedicated to delivering safe, private, and limitless
        internet access to users across the globe.
      </p>

      {[
        {
          title: "Enhanced Privacy & Security",
          description:
            "GShield encrypts your internet traffic, keeping your online activities private and secure, protecting you from hackers and cyber threats.",
        },
        {
          title: "Fast & Reliable Connection",
          description:
            "GShield encrypts your internet traffic, keeping your online activities private and secure, protecting you from hackers and cyber threats.",
        },
      ].map(({ title, description }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h6
            className="text-xl w-full text-start font-semibold flex gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-offset="25"
          >
            <CheckedIcon /> {title}
          </h6>

          <p
            className="text-default-500 text-justify text-lg leading-8 mb-3 mx-4"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-offset="25"
          >
            {description}
          </p>
        </div>
      ))}

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
        data-aos-offset="25"
      >
        Get it now
      </Button>
    </div>
  </Section>
);

export default AboutSection;
