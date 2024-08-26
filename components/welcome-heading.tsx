"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeHeading = () => {
  const user = useUser();
  return (
    <>
      <h2 className="text-2xl font-medium lg:text-4xl">
        Welcome back, {user.user?.firstName}
      </h2>
      <p className="text-sm text-white/60">
        Take a look at your latest financial data.
      </p>
    </>
  );
};
