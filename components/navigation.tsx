"use client";

import { type MainNav } from "@/config/main-nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { NavItem } from "./nav-item";

const NavigationItems: MainNav = [
  {
    label: "Overview",
    href: "/dashboard",
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
  },
  {
    label: "Accounts",
    href: "/dashboard/accounts",
  },
  {
    label: "Categories",
    href: "/dashboard/categories",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      {NavigationItems.map((item) => (
        <NavItem
          label={item.label}
          href={item.href}
          key={item.href}
          isActive={pathname === item.href}
        />
      ))}
    </>
  );
};
