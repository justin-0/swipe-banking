import { Fingerprint, KeyRound } from "lucide-react";

import { Logo } from "@/components/logo";
import { NavAuthItem } from "@/components/nav-auth-item";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="bg-black h-screen px-6 md:px-24 text-white">
      <nav className="h-16 flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-2">
          <Logo href="/" />
        </div>
        <div className="items-center justify-center gap-x-9 hidden md:flex font-medium">
          {/* TODO: Tooltip on hover? Is it worth doing? */}
          <NavAuthItem href="sign-in" label="Login" icon={Fingerprint} />
          <NavAuthItem
            href="sign-up"
            label="Get started"
            icon={KeyRound}
            className="border border-white/70 rounded-full px-3 py-1"
          />
        </div>
      </nav>
      <div className="mt-52">
        <h1 className="text-4xl font-bold text-center">
          Effortless Personal Finance
        </h1>
        <p className="mt-4 text-center text-lg text-white/70 sm:max-w-md mx-auto">
          Get the financial insights your banking app does not provide, connect
          to see the power
        </p>
        <div className="flex items-center justify-center mt-4 md:hidden">
          <Button className="border border-white">Get started</Button>
        </div>
      </div>
    </div>
  );
}
