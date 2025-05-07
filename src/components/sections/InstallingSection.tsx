"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { userBase64Src } from "@/lib/user-base64";
import {
  DownloadIcon2,
  InstallSetupIcon,
  RingPairIcon,
  WiFiIcon,
} from "@/icons";
import { Divider } from "@heroui/react";

const InstallingSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    title="How it is work"
    heading="GShield Download And Installing Process"
    {...props}
  >
    <div className="w-full flex flex-col lg:flex-row gap-y-12 mt-8">
      <div
        className="lg:w-3/5 w-full flex flex-col gap-y-6 md:gap-y-12 px-4 items-center md:items-start text-center md:text-left relative"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Divider
          orientation="vertical"
          className="hidden md:inline-block absolute top-0 left-24 h-[calc(100%-3rem)]"
        />
        {[
          {
            id: 1,
            Icon: DownloadIcon2,
            heading: "Easy Download",
            description:
              "Get the GShield VPN app on your device by downloading it from our website or app store.",
          },
          {
            id: 2,
            Icon: InstallSetupIcon,
            heading: "Instant Setup/Install",
            description:
              "Get the GShield VPN app on your device by downloading it from our website or app store.",
          },
          {
            id: 3,
            Icon: RingPairIcon,
            heading: "Connect to a Server",
            description:
              "Get the GShield VPN app on your device by downloading it from our website or app store.",
          },
          {
            id: 4,
            Icon: WiFiIcon,
            heading: "Browse Securely & Anonymously",
            description:
              "Get the GShield VPN app on your device by downloading it from our website or app store.",
          },
        ].map(({ id, Icon, heading, description }) => (
          <div
            key={id}
            className="group flex flex-col md:flex-row items-center md:items-start justify-center gap-4 cursor-default"
          >
            <span className="w-20 h-20 bg-default-200 text-primary group-hover:bg-primary group-hover:text-default-200 rounded-full flex items-center justify-center duration-500 relative">
              <span className="py-0.5 px-1.5 bg-primary text-default-200 group-hover:text-primary group-hover:bg-default-200 text-xs font-bold rounded-full absolute top-0 right-0">
                {id}
              </span>
              <Icon />
            </span>

            <div className="space-y-2 w-3/4">
              <h3 className="group-hover:text-primary text-2xl sm:text-3xl font-medium">
                {heading}
              </h3>
              <p className="invisible group-hover:visible text-default-500 text-base font-medium">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="lg:w-2/5 w-full flex items-center justify-center"
        data-aos="fade-left"
      >
        <Image
          className="w-full h-auto"
          src="/user.png"
          alt="image not founded"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={userBase64Src}
        />
      </div>
    </div>
  </Section>
);

export default InstallingSection;
