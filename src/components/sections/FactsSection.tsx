"use-client";

import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { mapBase64Src } from "@/lib/map-base64";
import { Card, CardBody } from "@heroui/react";

const FactsSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    title="Facts"
    heading="2,600+ Servers. Global Access. Instant Connection."
    description="Enjoy lightning-fast servers in 40+ countries. No throttling. No congestion. Total privacy."
    {...props}
  >
    <div className="w-full flex flex-col-reverse lg:flex-row gap-y-12">
      <div
        className="lg:w-2/3 w-full"
        data-aos="fade-right"
        data-aos-offset="25"
      >
        <Image
          className="w-full h-auto"
          src="/map.png"
          alt="image not founded"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={mapBase64Src}
        />
      </div>
      <div
        className="w-full max-w-72 flex flex-col gap-y-4 items-center"
        data-aos="fade-left"
        data-aos-offset="25"
      >
        {[
          { heading: "North America", description: "5 Countries" },
          { heading: "Europe", description: "19 Countries" },
          { heading: "Africa", description: "10 Countries" },
          { heading: "Asia", description: "25 Countries" },
        ].map(({ heading, description }) => (
          <Card key={heading} className="w-full">
            <CardBody className="w-full gap-2 rounded-xl p-4">
              <h4 className="text-xl font-medium">{heading}</h4>
              <p className="text-primary text-sm font-medium">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

export default FactsSection;
