import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Swipe",
    default: "Swipe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(font.className, "antialiased")}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
