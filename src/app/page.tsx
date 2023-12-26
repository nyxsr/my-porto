"use client";

import { renderIntro } from "@/components/intro/render-section";
import useCheckDeviceScreen from "@/hooks/useCheckDeviceScreen";
import Link from "next/link";

export default function Home() {
  const isMobileDevice = useCheckDeviceScreen();
  return (
    <main id="main">
      {isMobileDevice ? (
        <section className="mx-auto flex min-h-screen max-w-[85vw] flex-col items-center justify-center text-center">
          <p className="text-sm">sorry, i'm still working on mobile version</p>
          <p className="text-lg font-medium leading-5">
            but you still can reach me on
          </p>
          <div className="mt-5 flex gap-4">
            <Link
              href="https://www.linkedin.com/in/sahrul-ramdan-2012/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#f0fb3b] px-2 text-black"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahrul-ramdan-2012/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#f0fb3b] px-2 text-black"
            >
              Email
            </Link>
          </div>
        </section>
      ) : (
        renderIntro()
      )}
    </main>
  );
}
