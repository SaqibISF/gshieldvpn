"use client";

import React, { FC } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User as HeroUser,
} from "@heroui/react";
import { ChevronDownIcon, MoneyCheckDollarIcon, SignOutIcon } from "@/icons";
import {
  LOGIN_PAGE_PATH,
  PRICING_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { useSession } from "next-auth/react";

const AuthButton: FC<{
  classNames?: { dropdownButton?: string; authButton?: string };
}> = ({ classNames }) => {
  const pathname = usePathname();
  const { data: session, status: sessionStatus } = useSession();
  const { handleLogout } = useLogout();
  return (
    sessionStatus !== "loading" &&
    (sessionStatus === "authenticated" ? (
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            endContent={<ChevronDownIcon />}
            className={classNames && classNames.dropdownButton}
          >
            {session.user.name}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="user menu" variant="faded">
          <DropdownItem
            key="profile"
            isReadOnly
            className="h-14 gap-2 opacity-100"
            showDivider
          >
            <HeroUser
              avatarProps={{
                size: "sm",
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                className: "hidden",
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description={session.user.email}
              name={session.user.name}
            />
          </DropdownItem>

          <DropdownItem
            key="billing"
            showDivider
            startContent={<MoneyCheckDollarIcon />}
            as={Link}
            href={PRICING_PAGE_PATH}
          >
            Billing
          </DropdownItem>
          <DropdownItem
            key="logout"
            className="text-danger"
            color="danger"
            startContent={<SignOutIcon />}
            onPress={handleLogout}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    ) : (
      <Button
        as={Link}
        href={pathname !== LOGIN_PAGE_PATH ? LOGIN_PAGE_PATH : SIGNUP_PAGE_PATH}
        variant="bordered"
        radius="full"
        className={classNames && classNames.authButton}
      >
        {pathname !== LOGIN_PAGE_PATH ? "Login" : "Sign Up"}
      </Button>
    ))
  );
};

export default AuthButton;
