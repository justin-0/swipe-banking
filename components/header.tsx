import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="px-6 md:px-24 py-5 bg-zinc-950/90 text-white">
      <nav className="flex items-center justify-between">
        {/* logo, navigation and mobile menu */}
        <div className="flex items-center justify-center gap-x-24">
          <div className="flex items-center justify-center gap-x-2">
            <Logo href="/dashboard" />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <Navigation />
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
