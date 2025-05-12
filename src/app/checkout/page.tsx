import { Metadata } from "next";
import React, { FC, Suspense } from "react";
import CheckOutPage from "@/components/pages/CheckOutPage";

export const metadata: Metadata = {
  title: "Checkout",
};

const Page: FC = () => (
  <Suspense>
    <CheckOutPage />
  </Suspense>
);

export default Page;
