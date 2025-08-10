"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/sections/Section";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Link as HeroLink,
} from "@heroui/react";
import Image from "next/image";
import {
  DownloadIcon,
  ShieldIcon,
  FlashIcon,
  LocationDotIcon,
  StopIcon,
  WiFiIcon,
  BatteryFullIcon,
  AddUserIcon,
  MacOSIcon,
  KeyIcon,
} from "@/icons";
import Link from "next/link";
import { FAQSection } from "@/components/sections";

const DownloadForMACPage: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      parentClassName="bg-gradient-to-r from-cyan-500/10 to-slate-50"
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="lg:w-2/3 md:text-start mb-0">
          Download GShield VPN for macOS
        </SectionHeading>
        <SectionDescription className="lg:w-3/4 md:text-start p-0 mb-0">
          Secure your internet connection and protect your privacy with our
          easy-to-use macOS application. Fast, reliable, and built with your
          security in mind.
        </SectionDescription>
        <div className="flex items-center gap-4">
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            startContent={<DownloadIcon />}
            className="self-center md:self-start"
          >
            Download for macOS
          </Button>

          <Button
            color="primary"
            variant="bordered"
            size="lg"
            startContent={<KeyIcon />}
            className="self-center md:self-start"
          >
            Enter Activation Code
          </Button>
        </div>

        <p className="text-default-500 text-sm">
          Version 2.4.3 | Compatible with macOS 10.13 and above
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex items-start justify-center">
        <Image
          src="/windows-laptop-img.png"
          alt="mockup"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/windows-laptop-img.png"
          className="w-full max-w-96"
        />
      </div>
    </Section>

    <Section>
      <Card className="max-w-7xl w-full">
        <CardBody className="gap-6 p-6">
          <h1 className="text-2xl font-bold">Have an Activation Code?</h1>

          <div className="flex flex-col gap-2 ml-3">
            {[
              "Download and install GShield VPN for macOS",
              'Launch the app and click "Activate with Code"',
              "Enter your activation code when prompted",
            ].map((str, index) => (
              <p key={index} className="text-default-500 text-base">
                {str}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2 p-4 bg-default-100 border-2 border-default-600 rounded-2xl">
            <p>
              If you&apos;ve purchased a subscription but haven&apos;t received
              your activation code, please check your email or contact our
              support team.
            </p>
            <HeroLink
              as={Link}
              href="/contact-us"
              className="text-base font-medium"
            >
              Contact Us
            </HeroLink>
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">GShield VPN</span> for
          macOS?
        </>
      }
      description="Our macOS application is designed with security, speed, and ease of use in mind."
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
          macOS
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              "Click the download button above to get the latest version of GShield VPN for macOS.",
            Icon: MacOSIcon,
          },
          {
            heading: "Install & Open",
            description:
              "Open the downloaded .dmg file and drag GShield VPN to your Applications folder.",
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
              <div className="w-full text-primary bg-gray-100 h-16 rounded-lg flex items-center p-4">
                <Icon className="w-7 h-7" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>

    <FAQSection />
  </>
);

export default DownloadForMACPage;
