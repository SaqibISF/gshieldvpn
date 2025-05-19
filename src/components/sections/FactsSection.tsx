import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import Image from "next/image";
import { Africa, Asia, Europe, NorthAmerica } from "@/icons";
import { mapBase64Src } from "@/lib/map-base64";

const FactsSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    title="Facts"
    heading="2.6k+ Active Server In All Over The World."
    {...props}
  >
    <div className="flex flex-col-reverse lg:flex-row gap-y-12">
      <div
        className="lg:w-1/2 w-full"
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
        className="lg:w-1/2 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left"
        data-aos="fade-left"
        data-aos-offset="25"
      >
        <p
          className="text-default-500 text-xl font-medium leading-8"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          These speed excellent. It’s a fast connection safety Internet leading
          speeds across its network.
        </p>
        <div className="w-full grid sm:grid-cols-2 gap-4">
          {[
            {
              Icon: NorthAmerica,
              heading: "North America",
              description: "5 Countries",
            },
            {
              Icon: Europe,
              heading: "Europe",
              description: "19 Countries",
            },
            {
              Icon: Africa,
              heading: "Africa",
              description: "10 Countries",
            },
            {
              Icon: Asia,
              heading: "Asia",
              description: "25 Countries",
            },
          ].map(({ Icon, heading, description }) => (
            <div
              key={heading}
              className="w-full bg-[#F5F5F5] flex items-center gap-4 rounded-xl p-4"
            >
              <Icon />
              <div className="flex-1 flex flex-col gap-2 text-start">
                <h4 className="text-xl font-medium">{heading}</h4>
                <p className="text-primary text-sm font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default FactsSection;
