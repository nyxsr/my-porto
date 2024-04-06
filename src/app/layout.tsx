import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/utils/smooth-scrolling";
import React from "react";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsahrul.id"),
  title: "Sahrul Ramdan",
  description: "Sahrul Ramdan personal website",
  keywords: ["portfolio", "sahrulramdan", "sahrul", "ramdan","frontend","developer","react"],
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
