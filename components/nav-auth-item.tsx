import { cn } from "@/lib/utils";
import { Fingerprint, LucideIcon } from "lucide-react";
import Link from "next/link";

type NavAuthItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  className?: string;
};

export const NavAuthItem = ({
  href,
  label,
  icon: Icon,
  className,
}: NavAuthItemProps) => {
  return (
    <Link
      href={`/${href}`}
      className={cn("flex items-center justify-center", className)}
    >
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </Link>
  );
};
