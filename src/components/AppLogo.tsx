import React, { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AppLogo: FC<{ className?: string }> = ({ className }) => (
  <Image
    className={cn("w-44 h-auto", className)}
    src="/logo.svg"
    alt="image not founded"
    width={0}
    height={0}
    sizes="100vw"
    placeholder="blur"
    blurDataURL="/logo.svg"
  />
);

export default AppLogo;
