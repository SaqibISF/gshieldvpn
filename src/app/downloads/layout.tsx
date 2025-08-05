import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Downloads",
};

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => children;

export default DashboardLayout;
