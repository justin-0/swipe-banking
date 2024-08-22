import { UserButton } from "@clerk/nextjs";

export default function PlatformPage() {
  return (
    <>
      <UserButton />
      <h1>Protected</h1>;
    </>
  );
}
