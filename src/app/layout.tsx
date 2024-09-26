"use client";

import React from "react";
import { Inter } from "next/font/google";

import AppProviders from "@/app/app-providers";
import { PosthogPageviewTracker } from "@/components/posthog-pageview-tracker";

import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AppProviders>
          {children}
          <PosthogPageviewTracker />
        </AppProviders>
      </body>
    </html>
  );
}
