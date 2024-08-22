import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Image src="./logo.svg" alt="logo" width={40} height={50} />
      <Link href="/" className="text-xl">
        swipe
      </Link>
    </>
  );
};
