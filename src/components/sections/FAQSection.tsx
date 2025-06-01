"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQSection: FC<SectionProps> = ({ ...props }) => {
  const faqs = [
    {
      question: "Is it really free for 30 days?",
      answer: "Yes — no charge until day 31. Cancel anytime.",
    },
    {
      question: "What happens after the trial ends?",
      answer:
        "You’ll be automatically billed $11.99/month — no contracts, cancel whenever.",
    },
    {
      question: "Do you log my data or activity?",
      answer: "Never. We operate with a 100% no-logs policy.",
    },
    {
      question: "Will it slow my internet?",
      answer: "No. Our global server architecture is optimized for speed.",
    },
    {
      question: "Can I use it on all my devices?",
      answer: "Yes — one account covers unlimited devices.",
    },
  ];

  return (
    <Section
      title="FAQ"
      heading="Frequently Asked Questions"
      description="We have compiled list of frequently asked questions to provide you with quick and comprehensive answers."
      {...props}
    >
      <Accordion
        variant="splitted"
        className="max-w-4xl w-full"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
        data-aos-offset="25"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label={"FAQ " + (index + 1)}
            title={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
      <p
        className="text-default-500 text-base font-medium mt-14"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        More questions?{" "}
        <a
          href="mailto:support@gshieldvpn.com"
          className="text-primary font-bold"
        >
          Contact Us.
        </a>
      </p>
    </Section>
  );
};

export default FAQSection;
