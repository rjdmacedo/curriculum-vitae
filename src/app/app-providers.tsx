"use client";

import PostHog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  PostHog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
  });
}

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostHogProvider client={PostHog}>{children}</PostHogProvider>;
}
