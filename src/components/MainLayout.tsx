"use client";

import React, { FC, ReactNode, useEffect } from "react";
import AOS from "aos";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { INVOICE_PAGE_PATH } from "@/lib/pathnames";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex-grow overflow-hidden">
      <TopBar />
      <Navbar />
      <main>{children}</main>
      {pathname !== INVOICE_PAGE_PATH && <Footer />}
    </div>
  );
};

export default MainLayout;
