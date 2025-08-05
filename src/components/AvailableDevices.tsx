import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { AndroidIcon, IPhoneIcon, MACIcon, WindowsIcon } from "@/icons";
import { Button } from "@heroui/button";
import {
  DOWNLOAD_FOR_ANDROID_PAGE_PATH,
  DOWNLOAD_FOR_IOS_PAGE_PATH,
  DOWNLOAD_FOR_MAC_PAGE_PATH,
  DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";

const AvailableDevices: FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "flex flex-wrap items-center justify-center gap-6",
      className
    )}
  >
    {[
      {
        deviceName: "Windows",
        href: DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
        Icon: WindowsIcon,
      },
      { deviceName: "MAC", href: DOWNLOAD_FOR_MAC_PAGE_PATH, Icon: MACIcon },
      {
        deviceName: "Android",
        href: DOWNLOAD_FOR_ANDROID_PAGE_PATH,
        Icon: AndroidIcon,
      },
      {
        deviceName: "IOS",
        href: DOWNLOAD_FOR_IOS_PAGE_PATH,
        Icon: IPhoneIcon,
      },
    ].map(({ deviceName, href, Icon }) => (
      <div
        key={href}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        <Button
          as={Link}
          href={href}
          className="w-24 h-24 rounded-full hover:bg-gradient-to-b hover:from-[#008234] hover:to-[#0c8103] hover:text-white"
        >
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
