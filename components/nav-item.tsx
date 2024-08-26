import { MainNav } from "@/config/main-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItemProps = {
  isActive: boolean;
  href: string;
  label: string;
  onClick?: () => void;
};

export const NavItem = ({ href, label, isActive, onClick }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(isActive && "font-bold transition")}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
