import React, { FC, Suspense } from "react";
import ResetPasswordPage from "@/components/pages/ResetPasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Reset Password" };

const Page: FC = () => (
  <Suspense>
    <ResetPasswordPage />
  </Suspense>
);

export default Page;
