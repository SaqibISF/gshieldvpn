import { Metadata } from "next";
import { FC, Suspense } from "react";
import EmailVerificationPage from "@/components/pages/EmailVerificationPage";

export const metadata: Metadata = {
  title: "Email Verification",
};

const Page: FC = () => (
  <Suspense>
    <EmailVerificationPage />
  </Suspense>
);

export default Page;
