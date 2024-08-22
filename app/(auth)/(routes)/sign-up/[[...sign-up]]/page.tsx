import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

import { AuthSkeleton } from "@/components/skeletons/auth-skeleton";

export default function Page() {
  return (
    <>
      <ClerkLoading>
        <AuthSkeleton />
      </ClerkLoading>
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
    </>
  );
}
