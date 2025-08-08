"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/sections/Section";
import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import {
  DownloadIcon,
  ShieldIcon,
  FlashIcon,
  LocationDotIcon,
  StopIcon,
  WiFiIcon,
  BatteryFullIcon,
  AddUserIcon,
  IOSIcon,
} from "@/icons";
import Image from "next/image";
import { FAQSection } from "@/components/sections";

const DownloadForIOSPage: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      parentClassName="bg-gradient-to-r from-cyan-500/10 to-slate-50"
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="lg:w-2/3 md:text-start mb-0">
          Download GShield VPN for iOS
        </SectionHeading>
        <SectionDescription className="lg:w-3/4 md:text-start p-0 mb-0">
          High speed, low latency, support for up to 10 devices, strong
          encryption, and built-in threat protection — all in one.
        </SectionDescription>
        <Button
          color="primary"
          variant="shadow"
          size="lg"
          startContent={<DownloadIcon />}
          className="self-center md:self-start"
        >
          Download Now
        </Button>
      </div>
      <div className="w-full lg:w-1/3 flex items-start justify-center">
        <Image
          src="/mockup.png"
          alt="mockup"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/mockup.png"
          className="w-full max-w-72"
        />
      </div>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">GShield VPN</span> for iOS?
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Military-Grade Encryption",
            description:
              "Your data is protected with AES-256 encryption, the same standard used by security experts worldwide.",
            Icon: ShieldIcon,
          },
          {
            title: "Lightning-Fast Speeds",
            description:
              "Optimized servers ensure you get the fastest possible connection speeds while maintaining security.",
            Icon: FlashIcon,
          },
          {
            title: "Global Server Network",
            description:
              "Access content from anywhere with our network of servers across 90+ countries worldwide.",
            Icon: LocationDotIcon,
          },
          {
            title: "No-Logs Policy",
            description:
              "We never track, collect, or share your browsing history or online activities.",
            Icon: StopIcon,
          },
          {
            title: "Wi-Fi Protection",
            description:
              "Stay safe on public Wi-Fi networks with automatic protection against hackers and snoopers.",
            Icon: WiFiIcon,
          },
          {
            title: "Battery Efficient",
            description:
              "Optimized for iOS to provide maximum security with minimal battery consumption",
            Icon: BatteryFullIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <Card key={index} className="bg-slate-50 rounded-md">
            <CardBody className="gap-4 p-6">
              <span className="text-primary bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
                <Icon />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading={
        <>
          How to Install <span className="text-primary">GShield VPN</span> on
          iOS
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              'Visit the App Store and search for "GShield VPN" or click the download button above.',
            Icon: IOSIcon,
          },
          {
            heading: "Install & Open",
            description:
              'Tap "Get" to install the app, then open it from your home screen.',
            Icon: DownloadIcon,
          },
          {
            heading: "Create Account or Login",
            description:
              "Sign in with your existing account or create a new one in just a few steps.",
            Icon: AddUserIcon,
          },
          {
            heading: "Connect & Secure",
            description:
              "Tap the connect button and you're instantly protected with GShield VPN.",
            Icon: ShieldIcon,
          },
        ].map(({ heading, description, Icon }, index) => (
          <Card key={index}>
            <CardBody className="gap-4 p-6">
              <span className="w-12 h-12 text-white bg-primary text-base font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{heading}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </CardBody>
            <CardFooter>
              <div className="text-primary bg-gray-100 h-16 rounded-lg flex items-center p-4">
                <Icon className="w-7 h-7" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading={
        <>
          <span className="text-primary">GShield VPN</span> iOS App
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "/app-img-1.png",
          "/app-img-2.png",
          "/app-img-3.png",
          "/app-img-4.png",
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt={src}
            width={0}
            height={0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={src}
            className="w-full h-auto"
          />
        ))}
      </div>
    </Section>

    <FAQSection />
  </>
);

export default DownloadForIOSPage;
