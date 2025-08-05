"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/sections/Section";
import { Button, Card, CardBody } from "@heroui/react";
import DownloadIcon from "@/icons/DownloadIcon";
import Image from "next/image";
import {
  ShieldIcon,
  FlashIcon,
  LocationDotIcon,
  StopIcon,
  WiFiIcon,
  BatteryFullIcon,
  AddUserIcon,
  WindowIcon,
  ExclamationMarkIcon,
  FileEditIcon,
  BookIcon,
  NotesIcon,
} from "@/icons";
import { FAQSection } from "@/components/sections";

const DownloadForWindowsPage: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      parentClassName="bg-gradient-to-r from-cyan-500/10 to-slate-50"
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="lg:w-2/3 md:text-start mb-0">
          Download GShield VPN for Window
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

    <Section
      heading={
        <>
          Download <span className="text-primary">GShield VPN</span> for Windows
        </>
      }
      description="Get our latest version for Windows and enjoy enhanced security features, faster connection speeds, and a more intuitive interface."
    >
      <Card className="max-w-4xl w-full">
        <CardBody className="items-center justify-center gap-6 p-6">
          <span className="p-6 text-primary bg-cyan-50 rounded-full">
            <WindowIcon className="w-16 h-16" />
          </span>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="text-2xl font-bold">GShield VPN for Windows</h1>
            <p className="text-default-500 text-base font-normal">
              Version 4.2.1 | Released: May 20, 2023
            </p>
            <p className="text-default-500 text-base font-normal">
              Compatible with Windows 8, 10, and 11 (64-bit and 32-bit)
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              startContent={<DownloadIcon />}
              className="w-56 h-20 text-base font-semibold"
            >
              <div className="flex flex-col">
                <span>64-bit</span>
                <span>(Recommended)</span>
              </div>
            </Button>

            <Button
              size="lg"
              color="primary"
              variant="bordered"
              startContent={<DownloadIcon />}
              className="w-56 h-20 text-base font-semibold"
            >
              32-bit
            </Button>
          </div>

          <p className="text-default-500 text-base flex items-center gap-2">
            <ExclamationMarkIcon className="text-primary" /> Verified & Secure
            Download
          </p>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "SHA256 Checksum",
                details: "Verify file integrity",
                Icon: FileEditIcon,
              },
              {
                title: "Installation Guide",
                details: "Step-by-step tutorial",
                Icon: BookIcon,
              },
              {
                title: "Release Notes",
                details: "What's new in 4.2.1",
                Icon: NotesIcon,
              },
            ].map(({ title, details, Icon }, index) => (
              <Card key={index}>
                <CardBody className="items-center gap-1.5 p-4">
                  <Icon className="text-primary w-7 h-7" />
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="text-default-500 text-xs font-normal">
                    {details}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">GShield VPN</span> for
          Windows?
        </>
      }
      description="Our Windows application is designed with security, speed, and ease of use in mind."
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
          Windows
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              "Download the installer from our official website and save it to your computer.",
            Icon: WindowIcon,
          },
          {
            heading: "Install & Open",
            description:
              "Run the installer and follow the on-screen instructions to complete the installation.",
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
              <div className="text-primary bg-gray-100 h-16 rounded-lg flex items-center p-4">
                <Icon className="w-7 h-7" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <FAQSection />
  </>
);

export default DownloadForWindowsPage;
