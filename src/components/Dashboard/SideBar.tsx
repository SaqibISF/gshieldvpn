"use client";

import React, { FC } from "react";
import {
  DashboardIcon,
  SettingsIcon,
  SignOutIcon,
  SubscriptionIcon,
  TicketIcon,
} from "@/icons";
import {
  Button,
  Divider,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import {
  BILLING_DETAILS_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  SUBSCRIPTION_PAGE_PATH,
  SUPPORT_TICKETS_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { usePathname } from "next/navigation";

const SideBar: FC<{ className?: string }> = ({ className }) => {
  const pathname = usePathname();
  const { handleLogout } = useLogout();
  return (
    <aside className={cn("w-52 py-8", className)}>
      <ul>
        <li>
          <Button
            as={Link}
            href={DASHBOARD_PAGE_PATH}
            variant={pathname === DASHBOARD_PAGE_PATH ? "solid" : "light"}
            color={pathname === DASHBOARD_PAGE_PATH ? "primary" : "default"}
            radius="none"
            className="py-9 px-6 w-full justify-stretch"
          >
            <DashboardIcon />
            <span className="text-sm font-medium">Dashboard</span>
          </Button>
          <Divider />
        </li>

        {[
          {
            href: SUBSCRIPTION_PAGE_PATH,
            name: "Subscription",
            Icon: SubscriptionIcon,
          },
          {
            href: BILLING_DETAILS_PAGE_PATH,
            name: "Account & Billing",
            Icon: SettingsIcon,
          },
          {
            href: SUPPORT_TICKETS_PAGE_PATH,
            name: "Support Tickets",
            Icon: TicketIcon,
          },
        ].map(({ href, name, Icon }) => (
          <li key={href}>
            <Button
              as={Link}
              href={href}
              variant={pathname === href ? "solid" : "light"}
              color={pathname === href ? "primary" : "default"}
              radius="none"
              className="py-9 px-6 w-full justify-stretch"
            >
              <Icon />
              <span className="text-sm font-medium">{name}</span>
            </Button>
          </li>
        ))}

        <li>
          <Divider />
          <Button
            variant="light"
            radius="none"
            className="py-9 px-6 w-full justify-stretch"
            onPress={handleLogout}
          >
            <SignOutIcon />
            <span className="text-sm font-medium">Sign Out</span>
          </Button>
        </li>
      </ul>
      <div
        className="w-[21.875rem] h-[27.125rem] rounded-xl absolute blur-[5.375rem] -left-[10.625rem] -bottom-[12.5rem] !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(96, 211, 148, 0.70) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
        }}
        data-aos="fade-left"
        data-aos-duration="1500"
      ></div>
    </aside>
  );
};

export default SideBar;
