"use client";

import React from "react";

import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Analytics />
      <GoogleAnalytics
        gaId={(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string) || ""}
      />
    </>
  );
}
