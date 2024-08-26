"use client";

import { type MainNav } from "@/config/main-nav";
import { MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { NavItem } from "./nav-item";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

// TODO: Mobile nav with sheet component from shadcn ui
export const MobileNav = () => {
  const [isClient, setIsClient] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="text-white">
        <Button size="icon" variant="link" asChild className="size-6">
          <MenuIcon className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] bg-black sm:w-[540px]" side="left">
        <div className="flex flex-col justify-start gap-y-4 text-white">
          {NavigationItems.map((item) => (
            <NavItem
              label={item.label}
              href={item.href}
              key={item.href}
              isActive={pathname === item.href}
              onClick={() => {
                setSheetOpen(false);
                router.push(item.href);
              }}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
