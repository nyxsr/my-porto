"use client";

import { renderIntro } from "@/components/intro/render-section";

export default function Home() {
  return <main id="main">{renderIntro()}</main>;
}
