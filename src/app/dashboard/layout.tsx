import { Metadata } from "next";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  }
};

export default DashboardLayout;
