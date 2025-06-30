"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Divider } from "@heroui/react";
import AppLogo from "./AppLogo";
import {
  BILLING_DETAILS_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  SUBSCRIPTION_PAGE_PATH,
  SUPPORT_TICKETS_PAGE_PATH,
  TERMS_AND_CONDITIONS_PAGE_PATH,
} from "@/lib/pathnames";
import {
  FACEBOOK_GShield_URL,
  INSTAGRAM_GShield_URL,
  LINKEDIN_GShield_URL,
  TIKTOK_GShield_URL,
  TWITTER_GShield_URL,
  YOUTUBE_GShield_URL,
} from "@/lib/social-links";

const Footer: FC = () => (
  <footer className="w-full relative overflow-hidden">
    <div
      className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 !pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(96, 211, 148, 0.70) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
      }}
    ></div>

    <div
      className="size-[34.875rem] rounded-[[34.875rem] absolute blur-[12.5rem] -bottom-8 left-4 !pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(96, 211, 148, 0.50) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
      }}
    ></div>

    <div className="w-full max-w-7xl mx-auto px-4">
      <AppLogo className="py-12 lg:py-14" />

      <Divider />

      <div className="w-full py-4 lg:py-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-8">
        {[
          {
            heading: "Products",
            links: [
              { name: "VPN for Windows", href: "#" },
              { name: "VPN for Mac", href: "#" },
              { name: "VPN for Android", href: "#" },
              { name: "VPN for iPhone", href: "#" },
            ],
          },
          {
            heading: "Dashboard",
            links: [
              { name: "Dashboard", href: DASHBOARD_PAGE_PATH },
              { name: "Billing Details", href: BILLING_DETAILS_PAGE_PATH },
              { name: "Subscription", href: SUBSCRIPTION_PAGE_PATH },
              { name: "Support Tickets", href: SUPPORT_TICKETS_PAGE_PATH },
            ],
          },
          {
            heading: "Social",
            links: [
              { name: "TikTok", href: TIKTOK_GShield_URL },
              { name: "Twitter", href: TWITTER_GShield_URL },
              { name: "LinkedIn", href: LINKEDIN_GShield_URL },
              { name: "Instagram", href: INSTAGRAM_GShield_URL },
              { name: "Facebook", href: FACEBOOK_GShield_URL },
              { name: "Youtube", href: YOUTUBE_GShield_URL },
            ],
          },
          {
            heading: "Legal",
            links: [
              { name: "Privacy Policy", href: PRIVACY_POLICY_PAGE_PATH },
              {
                name: "Terms & Condition",
                href: TERMS_AND_CONDITIONS_PAGE_PATH,
              },
            ],
          },
        ].map(({ heading, links }) => (
          <section key={heading} className="w-full px-4 flex flex-col gap-3">
            <h4 className="text-base font-bold mb-2">{heading}</h4>
            {links.map((link) => (
              <Link
                key={link.name + link.href}
                target={
                  link.href.startsWith("https://") ||
                  link.href.startsWith("http://")
                    ? "_blank"
                    : "_self"
                }
                href={link.href}
                className="text-sm font-medium text-default-500"
              >
                {link.name}
              </Link>
            ))}
          </section>
        ))}
      </div>

      <Divider />

      <div className="w-full flex justify-between items-center py-4 lg:py-6">
        <div className="text-sm text-default-500">
          © 2025 GShieldVPN. All rights reserved.
        </div>
        <div className="text-base text-default-500">
          <span>Powered by </span>
          <Link
            href="https://www.tecclubx.com/"
            target="_blank"
            className="text-primary font-bold"
          >
            Tecclub
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
