"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import { Card, CardBody } from "@heroui/react";
import {
  DevicesIcon,
  SpeedIcon,
  ShieldIcon,
  SplitIcon,
  WiFiOffIcon,
  WorldIcon,
} from "@/icons";

const FeaturesSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    title="Features"
    heading="Everything You Expect — Done Right"
    // description="Discover the powerful features of GShieldVPN designed to provide you with secure, private, and seamless internet access."
    {...props}
  >
    <div className="w-full grid md:grid-cols-2 gap-6">
      {[
        {
          Icon: ShieldIcon,
          title: "Advanced Encryption",
          description: "256-bit AES standard used by military & banks",
        },
        {
          Icon: WiFiOffIcon,
          title: "Smart Auto-Connect",
          description: "Stay protected without lifting a finger",
        },
        {
          Icon: SplitIcon,
          title: "Strict No-Log Policy",
          description: "We never store or track your data",
        },
        {
          Icon: DevicesIcon,
          title: "Unlimited Devices",
          description: "Use GShield on all your devices at once",
        },
        {
          Icon: SpeedIcon,
          title: "Blazing Speeds",
          description: "Engineered to deliver fast, stable performance",
        },
        {
          Icon: WorldIcon,
          title: "Global Server Access",
          description: "Connect from anywhere with 100+ locations worldwide",
        },
      ].map(({ title, description, Icon }, index) => (
        <Card
          key={title.trim() + index}
          className="w-full p-4 mx-auto bg-[#00823417]"
          data-aos={
            (index + 1) % 2 === 1
              ? "zoom-out-right"
              : (index + 1) % 2 === 0
              ? "zoom-out-left"
              : ""
          }
          data-aos-duration="1500"
          data-aos-offset="25"
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
