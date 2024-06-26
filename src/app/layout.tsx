import React from "react";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";

import AppProviders from "@/app/app-providers";

import "./globals.css";
import {PosthogPageviewTracker} from "@/components/posthog-pageview-tracker";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <AppProviders>
        <body>{children}</body>
        <PosthogPageviewTracker />
        <Analytics />
      </AppProviders>
    </html>
  );
}
