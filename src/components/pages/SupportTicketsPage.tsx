"use client";

import React, { FC } from "react";
import DashboardSection from "../Dashboard/DashboardSection";
import SupportTicketsTable from "../Dashboard/SupportTicketsTable";
import Chat from "../Dashboard/Chat";

const SupportTicketsPage: FC = () => (
  <>
    <DashboardSection title="Support Tickets">
      <div
        className="w-full"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        <SupportTicketsTable />
      </div>
    </DashboardSection>

    <Chat />
  </>
);

export default SupportTicketsPage;
