"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { AndroidIcon, IPhoneIcon, MACIcon, WindowsIcon } from "@/icons";
import { Button } from "@heroui/react";

const AvailableDevices: FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "flex flex-wrap items-center justify-center gap-6",
      className
    )}
  >
    {[
      { deviceName: "Windows", Icon: WindowsIcon },
      { deviceName: "Mac", Icon: MACIcon },
      { deviceName: "Android", Icon: AndroidIcon },
      { deviceName: "iPhone", Icon: IPhoneIcon },
    ].map(({ deviceName, Icon }) => (
      <div
        key={deviceName}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        <Button className="w-24 h-24 rounded-full hover:bg-gradient-to-b hover:from-[#008234] hover:to-[#0c8103] hover:text-white">
          <Icon width={50} height={50} />
        </Button>
        <div className="p-4 flex flex-col items-center justify-center gap-y-4">
          <span className="text-base font-bold">{deviceName}</span>
        </div>
      </div>
    ))}
  </div>
);

export default AvailableDevices;
