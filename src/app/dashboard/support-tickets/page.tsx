"use client";

import React, { FC } from "react";
import { Chat, DashboardSection, SupportTicketsTable } from "@/components";

const SupportTicketsPage: FC = () => (
  <>
    <DashboardSection title="Support Tickets">
      <div className="w-full" data-aos="fade-down" data-aos-duration="1500">
        <SupportTicketsTable />
      </div>
    </DashboardSection>

    <Chat className="fixed right-16 bottom-16" />
  </>
);

export default SupportTicketsPage;
