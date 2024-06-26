"use client";

import PostHog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  console.log("Initializing PostHog");
  PostHog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    capture_pageview: false,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostHogProvider client={PostHog}>{children}</PostHogProvider>;
}