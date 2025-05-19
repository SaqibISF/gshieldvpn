"use client";
import React, { FC } from "react";
import { PricingSection, Section, SectionDivider } from "../sections";
import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react";
import { CheckedIcon, XCircleIcon } from "@/icons";
import { usePlans } from "@/hooks/usePlans";

const PricingPage: FC = () => {
  const { plans, isPlansLoading } = usePlans();
  const planFeatures = [
    "Basic Analytics Dashboard",
    "Multi-Platform Management",
    "Order Tracking",
    "Stock Level Monitoring",
    "Advanced Analytics",
    "Warehouse Management Tools",
    "Priority Customer Support",
    "Custom Integrations",
  ];

  return (
    <>
      <PricingSection
        isHeroSection
        isLeftCornerGradient
        isRightCornerGradient
      />

      <SectionDivider />

      <Section isLeftCornerGradient>
        <div
          className="w-full hidden lg:flex flex-row items-start justify-between"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {isPlansLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col gap-24 animate-pulse"
              >
                <CardHeader className="p-0 flex flex-col gap-7">
                  <Skeleton className="h-6 rounded w-1/3" />
                  <Skeleton className="h-10 rounded w-1/2" />
                </CardHeader>
                <CardBody>
                  <ul className="flex flex-col items-start gap-10 mx-auto">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <Skeleton
                        key={idx}
                        as="li"
                        className="h-8 w-8 rounded-full"
                      />
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}

          {plans &&
            plans.length !== 0 &&
            planFeatures &&
            planFeatures.length !== 0 && (
              <>
                <Card className="p-6 flex flex-col gap-40">
                  <CardHeader className="p-0 text-primary">
                    <h3 className="text-2xl font-semibold">Plan Features</h3>
                  </CardHeader>
                  <CardBody>
                    <ul className="flex flex-col items-start gap-10">
                      {planFeatures.map((item) => (
                        <li
                          key={item}
                          className="text-primary text-2xl font-normal"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

                {plans.map((plan) => (
                  <Card key={plan.id} className="p-6 flex flex-col gap-24">
                    <CardHeader className="p-0 flex flex-col gap-7">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <p className="text-2xl font-semibold">
                        ${plan.price}{" "}
                        <span className="text-default-500 text-xl">
                          /{plan.duration > 1 ? plan.duration : ""}{" "}
                          {plan.duration_unit}
                        </span>
                      </p>
                    </CardHeader>
                    <CardBody>
                      <ul className="flex flex-col items-start gap-10 mx-auto">
                        {planFeatures.map((feature) => (
                          <li key={feature}>
                            {planFeatures.includes(feature) ? (
                              <CheckedIcon size={32} />
                            ) : (
                              <XCircleIcon size={32} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                ))}
              </>
            )}
        </div>
      </Section>
    </>
  );
};

export default PricingPage;
