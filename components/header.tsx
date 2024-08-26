import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

import { Logo } from "./logo";
import { MobileNav, Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="bg-zinc-950/90 px-6 py-5 text-white md:px-24">
      <nav className="flex items-center justify-between">
        {/* logo, navigation and mobile menu */}
        <div className="flex items-center justify-center gap-x-24">
          <div className="hidden items-center justify-center gap-x-2 lg:flex">
            <Logo href="/dashboard" />
          </div>

          <div className="hidden items-center justify-center gap-x-4 lg:flex">
            <Navigation />
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
        {/* clerk user button */}
        <div className="flex items-center justify-end">
          <ClerkLoading>
            <Loader2 className="animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
      </nav>
      <div>welcome message</div>
    </header>
  );
};
