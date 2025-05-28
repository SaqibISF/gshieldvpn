"use client";

import React, { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { DashboardIcon } from "@/icons";
import {
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import SideBar from "./SideBar";

const DashboardLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full flex flex-col items-center justify-center pt-4 relative">
      <Navbar />

      <div
        className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(96, 211, 148, 0.70) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
        }}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="25"
      ></div>

      <div
        className="size-[33rem] rounded-[33rem] absolute blur-[12.5rem] !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 128, 0, 0.80) 12.38%, rgba(15, 15, 16, 0.00) 100%)",
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      ></div>

      <div className="w-full min-h-[calc(100vh-5rem)] flex">
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
          <DrawerContent className="w-52 rounded-none">
            <SideBar />
          </DrawerContent>
        </Drawer>

        <SideBar className="hidden lg:block" />

        <div className="hidden lg:block">
          <Divider orientation="vertical" />
        </div>

        <div className="flex-1 relative pt-20 lg:pt-14">
          <Tooltip content="dashboard" placement="bottom-start">
            <Button
              variant="light"
              isIconOnly
              onPress={onOpen}
              className="lg:hidden absolute top-4 left-4 p-2"
            >
              <DashboardIcon />
            </Button>
          </Tooltip>

          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
