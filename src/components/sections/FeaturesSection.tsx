"use client";
import React, { FC } from "react";
import Section from "./Section";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";
import {
  GlobeIcon,
  LockIcon,
  PlayIcon,
  ShieldIcon,
  SplitIcon,
  WiFiOffIcon,
} from "@/icons";

const FeaturesSection: FC = () => (
  <Section
    title="Features"
    heading="Features for Our App"
    description="Discover the powerful features of GShieldVPN designed to provide you with secure, private, and seamless internet access."
    isCenterGradient
  >
    <div className="w-full grid md:grid-cols-2 gap-6">
      {[
        {
          Icon: ShieldIcon,
          title: "Secure encryption",
          description:
            "Keep your online traffic safe behind a wall of next-generation encryption",
        },
        {
          Icon: WiFiOffIcon,
          title: "Safe when disconnected",
          description:
            "Keep your online traffic safe behind a wall of next-generation encryption",
        },
        {
          Icon: SplitIcon,
          title: "Split tunneling",
          description:
            "Everyday digital security, your way. Choose which apps need VPN protection.",
        },
        {
          Icon: LockIcon,
          title: "Double VPN",
          description:
            "Add another layer of encryption with our Double VPN servers for extra peace of mind.",
        },
        {
          Icon: PlayIcon,
          title: "SmartPlay",
          description:
            "Watch shows and movies safely without extra steps — whether at home or abroad.",
        },
        {
          Icon: GlobeIcon,
          title: "Private DNS",
          description:
            "Enjoy more online privacy without worrying about third parties spying on your every move.",
        },
      ].map(({ title, description, Icon }, index) => (
        <Card
          key={title.trim() + index}
          className="p-4 mx-auto bg-[#00823417]"
          data-aos={
            (index + 1) % 2 === 1
              ? "zoom-out-right"
              : (index + 1) % 2 === 0
              ? "zoom-out-left"
              : ""
          }
          data-aos-duration="1500"
        >
          <CardBody className="flex sm:flex-row gap-4 items-center">
            <span className="size-[4.375rem] flex items-center justify-center bg-primary text-white rounded-full">
              <Icon />
            </span>
            <div className="flex-1 flex flex-col justify-center text-center sm:text-start">
              <h5 className="text-2xl font-normal mb-2">{title}</h5>
              <small className="text-default-500 text-base font-normal">
                {description}
              </small>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
