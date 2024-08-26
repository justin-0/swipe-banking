import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Fingerprint, KeyRound } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { NavAuthItem } from "@/components/nav-auth-item";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="h-screen bg-black px-6 text-white md:px-24">
      <nav className="flex h-16 items-center justify-between">
        <div className="flex items-center justify-center gap-x-2">
          <Logo href="/" />
        </div>
        <div className="hidden items-center justify-center gap-x-9 font-medium md:flex">
          {/* TODO: Tooltip on hover? Is it worth doing? */}
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <NavAuthItem href="sign-in" label="Login" icon={Fingerprint} />
            <NavAuthItem
              href="sign-up"
              label="Get started"
              icon={KeyRound}
              className="rounded-full border border-white/70 px-3 py-1"
            />
          </SignedOut>
        </div>
      </nav>
      <div className="mt-52">
        <h1 className="text-center text-4xl font-bold">
          Effortless Personal Finance
        </h1>
        <p className="mx-auto mt-4 text-center text-lg text-white/70 sm:max-w-md">
          Get the financial insights your banking app does not provide, connect
          to see the power
        </p>
        <div className="mt-4 flex items-center justify-center md:hidden">
          <Button className="border border-white">Get started</Button>
        </div>
      </div>
    </div>
  );
}
