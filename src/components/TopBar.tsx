"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { Tooltip } from "@heroui/react";
import axios, { AxiosError } from "axios";
import { IP_INFO_TOKEN } from "@/lib/constants";

const TopBar: FC = () => {
  type IPInfo = {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
  };

  const [ipInfo, setIPInfo] = useState<IPInfo | null>(null);

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const res = await axios.get<IPInfo>(
          `https://ipinfo.io/json?token=${IP_INFO_TOKEN}`
        );
        if (res.status === 200) {
          setIPInfo(res.data);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
        }
      }
    };

    fetchIPInfo();
  }, []);

  return (
    <div className="bg-[#151823] text-white text-center flex flex-wrap items-center justify-center gap-1 py-1.5 text-xs leading-6 font-medium overflow-x-clip">
      <p>
        Your IP: <span>{ipInfo ? ipInfo.ip : "Unknown"}</span>
      </p>
      <p>·</p>
      <p>
        Your ISP: <span>{ipInfo ? ipInfo.org : "Unknown"}</span>
      </p>
      <p>·</p>
      <p>
        Your Status:{" "}
        {ipInfo ? (
          <Tooltip
            content="To protect your internet connection, get GShieldVPN and connect to one of our servers."
            showArrow
            placement="bottom"
            className="max-w-96 text-white bg-neutral-700/95 px-4 py-2 rounded-lg"
          >
            <Link href={PRICING_PAGE_PATH} className="text-red-500">
              Unprotected
            </Link>
          </Tooltip>
        ) : (
          "Unknown"
        )}
      </p>
    </div>
  );
};

export default TopBar;
