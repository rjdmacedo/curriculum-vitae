import { usePathname } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

export const PosthogPageviewTracker = () => {
  const posthog = usePostHog();
  const pathname = usePathname();

  useEffect(() => {
    if (posthog) {
      posthog.capture("$pageview", { pathname });
    }
  }, [posthog, pathname]);

  return null;
};
