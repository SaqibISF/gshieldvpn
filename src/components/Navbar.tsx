import React, { FC } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button, ButtonGroup } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { link as linkStyles } from "@heroui/theme";
import Link from "next/link";
import { cn } from "@/lib/utils";

// import { ThemeSwitch } from "@/components/theme-switch";

import {
  DOWNLOAD_FOR_ANDROID_PAGE_PATH,
  DOWNLOAD_FOR_IOS_PAGE_PATH,
  DOWNLOAD_FOR_MAC_PAGE_PATH,
  DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
  DOWNLOADS_PAGE_PATH,
  FEATURES_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_PAGE_PATH,
  PRICING_PAGE_PATH,
  SERVERS_PAGE_PATH,
} from "@/lib/pathnames";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";
import AppLogo from "./AppLogo";
import {
  AndroidIcon,
  ChevronDownIcon,
  IOSIcon,
  MACIcon,
  WindowsIcon,
} from "@/icons";

const Navbar: FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: HOME_PAGE_PATH },
    {
      label: "Features",
      href: FEATURES_PAGE_PATH,
    },
    {
      label: "Servers",
      href: SERVERS_PAGE_PATH,
    },
    {
      label: "Pricing",
      href: PRICING_PAGE_PATH,
    },
  ];

  return (
    <HeroUINavbar position="static" maxWidth="xl" className="bg-transparent">
      <NavbarContent>
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={HOME_PAGE_PATH}>
            <AppLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={cn(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium border-b-2 border-transparent pb-2 duration-300",
                  pathname === item.href
                    ? "text-primary border-primary"
                    : "text-foreground"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex lg:gap-4 gap-3">
          {/* <ThemeSwitch /> */}

          <AuthButton
            classNames={{
              dropdownButton: "hidden sm:inline-flex",
              authButton: "hidden sm:inline-flex",
            }}
          />

          <ButtonGroup
            color="primary"
            variant="shadow"
            radius="full"
            className="hidden sm:inline-flex"
          >
            <Button as={Link} href={DOWNLOADS_PAGE_PATH}>
              Download
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly>
                  <ChevronDownIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu color="primary" variant="flat">
                {[
                  {
                    href: DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
                    title: "Download for Windows",
                    Icon: WindowsIcon,
                  },
                  {
                    href: DOWNLOAD_FOR_MAC_PAGE_PATH,
                    title: "Download for MAC",
                    Icon: MACIcon,
                  },
                  {
                    href: DOWNLOAD_FOR_ANDROID_PAGE_PATH,
                    title: "Download for Android",
                    Icon: AndroidIcon,
                  },
                  {
                    href: DOWNLOAD_FOR_IOS_PAGE_PATH,
                    title: "Download for IOS",
                    Icon: IOSIcon,
                  },
                ].map(({ href, title, Icon }) => (
                  <DropdownItem
                    key={href}
                    as={Link}
                    href={href}
                    showDivider
                    startContent={<Icon />}
                  >
                    {title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </NavbarItem>
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[
            ...navItems,
            {
              label: "Login",
              href: LOGIN_PAGE_PATH,
            },
            {
              label: "Download",
              href: DOWNLOADS_PAGE_PATH,
            },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.href === LOGIN_PAGE_PATH ? (
                <AuthButton
                  classNames={{
                    dropdownButton: "w-full sm:hidden",
                    authButton: "w-full sm:hidden",
                  }}
                />
              ) : item.href === DOWNLOADS_PAGE_PATH ? (
                <Button
                  as={Link}
                  href={DOWNLOADS_PAGE_PATH}
                  color="primary"
                  variant="shadow"
                  radius="full"
                  className="w-full sm:hidden"
                  endContent={<ChevronDownIcon />}
                >
                  Download
                </Button>
              ) : (
                <Link
                  className={
                    pathname === item.href ? "text-primary" : "text-foreground"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
