import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import SmoothScrolling from "@/utils/smooth-scrolling";
import React from "react";
import "./globals.css";
import { HOSTED_URL, META_KEYWORDS } from "@/constants/other";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(HOSTED_URL),
  title: "Sahrul Ramdan",
  description: "A Software Engineer who likes to build things and love to help people build their dream projects.",
  keywords: META_KEYWORDS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={raleway.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
