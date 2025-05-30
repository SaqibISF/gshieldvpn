"use client";
import React, { FC } from "react";
import Section, { SectionProps } from "./Section";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQSection: FC<SectionProps> = ({ ...props }) => {
  const faqs = [
    {
      question: "Why do I need a VPN?",
      answer:
        "A VPN (Virtual Private Network) helps protect your online privacy by encrypting your internet connection, ensuring that your data is safe from hackers, ISPs, and potential cyber threats. It also allows you to browse the internet anonymously and access content that might be restricted in certain regions.",
    },
    {
      question: "How does GShield protect my data?",
      answer:
        "GShield uses state-of-the-art encryption protocols to safeguard your data while you browse the internet. We use industry-leading AES-256 encryption, which is virtually unbreakable. Additionally, our strict no-logs policy ensures that your browsing history and personal data are never stored or shared with third parties.",
    },
    {
      question: "Does GShield run when the app is closed?",
      answer:
        "Yes, GShield continues to run in the background, providing continuous protection for your internet connection, even when the app is closed. This ensures that your data remains encrypted and secure while you use other applications or browse the web.",
    },
    {
      question: "Can I use the GShield app abroad?",
      answer:
        "Absolutely! GShield can be used anywhere in the world. Whether you're traveling or living abroad, you can still enjoy the same high level of security and access to geo-restricted content that you would have at home.",
    },
    {
      question: "Can I use your VPN on multiple devices?",
      answer:
        "Yes, GShield supports multiple devices. You can install and use GShield on several devices at the same time, including your phone, laptop, and tablet. Our flexible plan allows you to connect all of your devices and protect them simultaneously.",
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
