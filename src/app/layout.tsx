import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/utils/smooth-scrolling";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahrul Ramdan",
  description: "Sahrul Ramdan personal website",
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
