import React, { FC, Suspense } from "react";
import PaymentProcessingPage from "@/components/pages/PaymentProcessingPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Payment Processing" };

const Page: FC = () => (
  <Suspense>
    <PaymentProcessingPage />
  </Suspense>
);

export default Page;
