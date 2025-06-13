"use client";
import React, { FC } from "react";
import { AvailableDevices } from "@/components";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import { Button } from "@heroui/react";
import { HeadphoneIcon } from "@/icons";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";
import { getFormattedDate } from "@/lib/utils";
import { useActivePlan } from "@/hooks/usePlans";
import { useSession } from "next-auth/react";

const DashboardPage: FC = () => {
  const { data: session } = useSession();
  const { activePlan } = useActivePlan();
  return (
    <DashboardSection
      title="Dashboard"
      heading={`Welcome back, ${session ? session.user.name : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-default-500 rounded-xl"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-offset="25"
        >
          <Button
            as={Link}
            href={DOWNLOADS_PAGE_PATH}
            variant="shadow"
            color="primary"
            size="lg"
            radius="full"
            className="max-w-72 w-full"
          >
            Connect
          </Button>
          <p className="text-default-500 text-2xl font-normal">
            Your Online activity is protected.
          </p>
        </div>

        <div
          className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-offset="25"
        >
          <h3 className="text-3xl font-semibold text-center">
            Download GShield VPN{" "}
          </h3>
          <AvailableDevices />
        </div>

        <div
          className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-offset="25"
        >
          <h3 className="text-2xl font-medium">Subscription</h3>
          {activePlan ? (
            <>
              <div className="flex items-center justify-between text-xl text-default-500 font-normal">
                <p>Plan: {activePlan.plan.name}</p>
                <p className="text-base">
                  {activePlan.plan.duration} {activePlan.plan.duration_unit}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 text-xl text-default-500 font-normal">
                <p>Renewal Date: {getFormattedDate(activePlan.end_date)}</p>
                <p className="text-base">
                  ${activePlan.amount_paid}/
                  {activePlan.plan.duration > 1
                    ? activePlan.plan.duration + " "
                    : ""}
                  {activePlan.plan.duration_unit}
                </p>
              </div>
            </>
          ) : (
            <p className="text-default-500 text-base font-normal">
              No, Active Plan Found.
            </p>
          )}
        </div>

        <div
          className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-offset="25"
        >
          <h3 className="text-2xl font-medium">Recent Activity</h3>
          <p className="text-default-500 text-xl font-normal">
            Now connected to New York Server
          </p>
        </div>

        <div
          className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-offset="25"
        >
          <h3 className="flex items-center gap-2 text-2xl font-medium">
            <HeadphoneIcon size={44} /> Customer Contact Support
          </h3>
          <p className="text-default-500 text-xl font-normal">
            We&apos;re here to help you 24/7—get in touch anytime!
          </p>
        </div>
      </div>
    </DashboardSection>
  );
};

export default DashboardPage;
