"use client";
import React, { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../Navbar";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  isHeroSection?: boolean;
  title?: string;
  heading?: string;
  subtitle?: string;
  description?: string;
  isLeftCornerGradient?: boolean;
  isRightCornerGradient?: boolean;
  isCenterGradient?: boolean;
  parentClassName?: string;
};

const SectionTitle: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span
    className={cn(
      "text-primary bg-[#E2FFE0] w-fit px-6 py-2 rounded-full text-base font-medium text-center mb-10 inline-block",
      className
    )}
    data-aos="fade-up"
    data-aos-duration="1500"
    {...props}
  >
    {children}
  </span>
);

const SectionHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h2
    className={cn(
      "lg:w-1/2 sm:text-5xl text-4xl font-bold !leading-[3.5rem] text-center mb-6",
      className
    )}
    data-aos="zoom-in-up"
    data-aos-easing="ease-in-out"
    data-aos-duration="1500"
    {...props}
  >
    {children}
  </h2>
);

const SectionSubTitle: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span
    className={cn(
      "px-4 sm:text-xl text-base sm:leading-10 leading-9 font-medium md:w-2/3 text-center mt-4 mb-6 inline-block",
      className
    )}
    data-aos="fade-up"
    data-aos-duration="1500"
    {...props}
  >
    {children}
  </span>
);

const SectionDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p
    className={cn(
      "text-default-500 px-8 text-xl leading-8 capitalize lg:w-2/3 text-center mb-14",
      className
    )}
    data-aos="zoom-in-up"
    data-aos-duration="1500"
    {...props}
  >
    {children}
  </p>
);

const Section: FC<SectionProps> = ({
  isHeroSection,
  title,
  heading,
  subtitle,
  description,
  isLeftCornerGradient,
  isRightCornerGradient,
  isCenterGradient,
  parentClassName,
  className,
  children,
  ...props
}) => (
  <section
    id={isHeroSection ? "main-section" : undefined}
    className={cn(
      "w-full flex flex-col items-center justify-center relative",
      isHeroSection ? "pt-4" : "",
      parentClassName
    )}
    {...props}
  >
    {isHeroSection && <Navbar />}

    {isLeftCornerGradient && (
      <div
        className="size-[42rem] rounded-[42rem] absolute blur-[12.5rem] -top-80 left-4 pointer-events-none"
        style={{
          rotate: "-135deg",
          background:
            "linear-gradient(180deg, #60D394 12.38%, rgba(15, 15, 16, 0.00) 33.74%)",
        }}
        data-aos="fade-left"
        data-aos-duration="1500"
      ></div>
    )}

    {isRightCornerGradient && (
      <div
        className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(96, 211, 148, 0.70) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
        }}
        data-aos="fade-right"
        data-aos-duration="1500"
      ></div>
    )}

    {isCenterGradient && (
      <div
        className="size-[33rem] rounded-[33rem] absolute blur-[12.5rem] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 128, 0, 0.80) 12.38%, rgba(15, 15, 16, 0.00) 100%)",
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
      ></div>
    )}

    <div
      className={cn(
        "container w-full max-w-7xl flex flex-col flex-wrap items-center justify-center",
        isHeroSection
          ? "p-4 min-h-[calc(100vh-5rem)]"
          : "px-4 py-12 lg:py-14 h-auto",
        className
      )}
    >
      {title && <SectionTitle>{title}</SectionTitle>}

      {heading && <SectionHeading>{heading}</SectionHeading>}

      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}

      {description && <SectionDescription>{description}</SectionDescription>}

      {children}
    </div>
  </section>
);

export { SectionTitle, SectionHeading, SectionSubTitle, SectionDescription };

export default Section;
