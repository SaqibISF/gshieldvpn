"use client";

import React, { FC, ReactNode } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { useRouter } from "next/navigation";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "@/store/store";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export const Providers: FC<{
  className?: string;
  children: ReactNode;
  themeProps: ThemeProviderProps;
}> = ({ className, children, themeProps }) => {
  const router = useRouter();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementById("navbar");
  //     const heroSection = document.getElementById("main-section");

  //     if (navbar && heroSection) {
  //       if (window.scrollY > heroSection.offsetTop + 16) {
  //         navbar.classList.add("fixed");
  //         navbar.classList.remove("sticky");
  //         heroSection.classList.add("pt-20");
  //         heroSection.classList.remove("pt-4");
  //       } else {
  //         navbar.classList.remove("fixed");
  //         navbar.classList.add("sticky");
  //         heroSection.classList.add("pt-4");
  //         heroSection.classList.remove("pt-20");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <HeroUIProvider navigate={router.push} className={className}>
      <CookiesProvider>
        <ThemeProvider {...themeProps}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
        <ToastProvider />
      </CookiesProvider>
    </HeroUIProvider>
  );
};
